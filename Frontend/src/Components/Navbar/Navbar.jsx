export default function Navbar() {
  return (
    <>
      <header>
        <a href="#" class="logo">
          Mind <span>Guardians.</span>
        </a>
        <div class="bx bx-menu" id="menu-icon"></div>

        <ul class="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/questions">Questionnaire</a>
          </li>

          <li>
            <a href="/chat">Chat</a>
          </li>

          {/* <li>
            <a href="#contact">Contact</a>
          </li> */}
        </ul>
      </header>
      <div className="head_padding"></div>
    </>
  );
}
