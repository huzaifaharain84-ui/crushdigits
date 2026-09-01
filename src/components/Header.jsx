export default function Header() {
  return (
    <header>
      <div className="container nav">
        <a className="logo-placeholder" href="#home" aria-label="Crush Digits Accountants Limited — home">
          <span>Logomark</span>
        </a>
        <nav>
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
