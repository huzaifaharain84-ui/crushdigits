export default function Header() {
  return (
    <header>
      <div className="container nav">
        <a href="#home" aria-label="Crush Digits Accountants Limited — home">
          <img
            src="/logo-wordmark.png"
            alt="Crush Digits Accountants"
            className="logo-image"
          />
        </a>
        <nav aria-label="Main">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn" href="#contact">
          Get in Touch
        </a>
      </div>
    </header>
  )
}
