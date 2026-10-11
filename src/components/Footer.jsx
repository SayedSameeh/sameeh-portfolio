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
          <path d="M18 27h204l-13 17H31z" />
          <path d="M38 52h164v13H38z" />
          <path d="M55 48h17v100H55zm113 0h17v100h-17z" />
          <path d="M61 119h118v12H61z" />
        </svg>
      </div>
      <span>SAMEEH.EXE © 2026</span>
    </footer>
  );
}

export default Footer;
