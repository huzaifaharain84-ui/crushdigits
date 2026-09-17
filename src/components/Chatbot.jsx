import { useEffect, useId, useRef, useState } from 'react'
import {
  conversationNodes,
  START_NODE,
  CHATBOT_EVENTS,
} from '../data/chatbotConversation.js'

// Fires a structured analytics event. No analytics provider is wired up on
// this project yet, so this simply logs — swap the body for a real
// analytics call (gtag, plausible, etc.) when one is added.
function trackEvent(name, detail) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: name, ...detail })
  }
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="9.5" r="1" fill="currentColor" />
      <circle cx="12" cy="9.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="9.5" r="1" fill="currentColor" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function RestartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12a8 8 0 1 1 2.6 5.9M4 12V6m0 6h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function buildInitialHistory() {
  const node = conversationNodes[START_NODE]
  return node.messages.map((text, i) => ({
    id: `root-${i}`,
    sender: 'bot',
    text,
  }))
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false)
  const [showNudge, setShowNudge] = useState(false)
  const [nudgeDismissed, setNudgeDismissed] = useState(false)
  const [currentNodeId, setCurrentNodeId] = useState(START_NODE)
  const [history, setHistory] = useState(buildInitialHistory)
  const [isTyping, setIsTyping] = useState(false)

  const panelRef = useRef(null)
  const launcherRef = useRef(null)
  const scrollRef = useRef(null)
  const typingTimeoutRef = useRef(null)
  const titleId = useId()

  // Show a one-time nudge bubble a couple of seconds after load, unless the
  // visitor has already opened the chat or dismissed it.
  useEffect(() => {
    if (hasOpenedOnce || nudgeDismissed) return
    const timer = setTimeout(() => setShowNudge(true), 2500)
    return () => clearTimeout(timer)
  }, [hasOpenedOnce, nudgeDismissed])

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    }
  }, [])

  // Keep the conversation scrolled to the latest message.
  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [history, isTyping, isOpen])

  // Escape-to-close + basic focus handling.
  useEffect(() => {
    if (!isOpen) return

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        e.stopPropagation()
        closeChat()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const focusTarget = panelRef.current?.querySelector('[data-autofocus]')
    focusTarget?.focus()

    return () => document.removeEventListener('keydown', onKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  function openChat() {
    setIsOpen(true)
    setHasOpenedOnce(true)
    setShowNudge(false)
    trackEvent(CHATBOT_EVENTS.OPENED)
  }

  function closeChat() {
    setIsOpen(false)
    trackEvent(CHATBOT_EVENTS.CLOSED)
    launcherRef.current?.focus()
  }

  function dismissNudge(e) {
    e.stopPropagation()
    setShowNudge(false)
    setNudgeDismissed(true)
  }

  function goToContact() {
    trackEvent(CHATBOT_EVENTS.CONTACT_CLICKED)
    closeChat()
    // Let the panel close first, then bring the existing contact form
    // into view — no separate/duplicate contact mechanism is created.
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      document.getElementById('contact')?.querySelector('input[name="name"]')?.focus({ preventScroll: true })
    }, 200)
  }

  function restartConversation() {
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current)
    setIsTyping(false)
    setCurrentNodeId(START_NODE)
    setHistory(buildInitialHistory())
    trackEvent(CHATBOT_EVENTS.RESTARTED)
  }

  function selectOption(option) {
    trackEvent(CHATBOT_EVENTS.OPTION_SELECTED, { label: option.label, from: currentNodeId })
    if (option.event) trackEvent(option.event, { label: option.label, from: currentNodeId })

    const userEntry = { id: `u-${Date.now()}`, sender: 'user', text: option.label }
    setHistory((prev) => [...prev, userEntry])

    if (option.action === 'contact') {
      goToContact()
      return
    }

    const nextId = option.next
    const nextNode = nextId ? conversationNodes[nextId] : null

    if (!nextNode) {
      // Deterministic fallback: never leave the visitor stuck.
      goToContact()
      return
    }

    setIsTyping(true)
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
      setCurrentNodeId(nextId)
      setHistory((prev) => [
        ...prev,
        ...nextNode.messages.map((text, i) => ({
          id: `${nextId}-${Date.now()}-${i}`,
          sender: 'bot',
          text,
        })),
      ])
    }, 550)
  }

  const currentNode = conversationNodes[currentNodeId] ?? conversationNodes[START_NODE]

  return (
    <div className="chatbot-root">
      {isOpen && (
        <div
          ref={panelRef}
          className="chatbot-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="chatbot-header">
            <div className="chatbot-header-text">
              <span id={titleId} className="chatbot-title">Crush Digits</span>
              <span className="chatbot-subtitle">Usually replies during business hours</span>
            </div>
            <div className="chatbot-header-actions">
              <button
                type="button"
                className="chatbot-icon-btn"
                onClick={restartConversation}
                aria-label="Restart conversation"
                title="Restart conversation"
              >
                <RestartIcon />
              </button>
              <button
                type="button"
                className="chatbot-icon-btn"
                onClick={closeChat}
                aria-label="Close chat"
                data-autofocus
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          <div className="chatbot-messages" ref={scrollRef} aria-live="polite">
            {history.map((entry) => (
              <div
                key={entry.id}
                className={`chatbot-bubble chatbot-bubble-${entry.sender}`}
              >
                {entry.text}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-bubble chatbot-bubble-bot chatbot-typing" aria-label="Typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className="chatbot-options" role="group" aria-label="Choose an option">
            {!isTyping &&
              currentNode.options.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  className="chatbot-option-btn"
                  onClick={() => selectOption(option)}
                >
                  {option.label}
                </button>
              ))}
          </div>
        </div>
      )}

      {!isOpen && showNudge && (
        <div className="chatbot-nudge" role="status">
          <button
            type="button"
            className="chatbot-nudge-dismiss"
            onClick={dismissNudge}
            aria-label="Dismiss notification"
          >
            <CloseIcon />
          </button>
          <button type="button" className="chatbot-nudge-text" onClick={openChat}>
            Have a question? We're here to help.
          </button>
        </div>
      )}

      <button
        ref={launcherRef}
        type="button"
        className="chatbot-launcher"
        onClick={() => (isOpen ? closeChat() : openChat())}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close chat' : 'Open chat: Need help?'}
      >
        <ChatIcon />
        <span className="chatbot-launcher-label">{isOpen ? 'Close' : 'Need help?'}</span>
      </button>
    </div>
  )
}
