export default function Header() {
  return (
    <header>
      <div className="container nav">
        <a href="#home" aria-label="Crush Digits Accountants Limited — home">
          <img
            src="/logo.jpeg"
            alt="Crush Digits Accountants Limited logo"
            className="logo-image"
          />
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
