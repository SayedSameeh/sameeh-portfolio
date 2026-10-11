function Footer() {
  return (
    <footer
      className="
      py-10
      text-center
      text-gray-500
      border-t
      border-cyan-500/10
    "
    >
      <div className="torii-gate" aria-hidden="true">
        <svg viewBox="0 0 240 180" focusable="false">
          <path className="torii-shadow" d="M22 42 34 27q86-22 172 0l12 15q-98-13-196 0Z" />
          <path className="torii-crossbeam" d="M43 53h154v16H43z" />
          <path className="torii-post" d="m54 62 18 2-7 93H47zm114 2 18-2 7 93h-18z" />
          <path className="torii-bracket" d="M52 76h136v10H52z" />
          <path className="torii-base" d="M43 154h33v8H43zm121 0h33v8h-33z" />
          <path className="torii-nameplate" d="M110 70h20v37h-20z" />
        </svg>
      </div>
      <span>SAMEEH.EXE © 2026</span>
    </footer>
  );
}

export default Footer;
