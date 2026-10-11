function JourneyBackdrop() {
  const trailPath =
    "M 720 620 C 1030 820, 1120 1100, 780 1360 C 430 1620, 350 1900, 700 2140 C 1050 2380, 1100 2660, 760 2910 C 420 3160, 430 3460, 760 3690 C 1090 3910, 1050 4180, 720 4420 C 510 4570, 590 4740, 720 4880";

  return (
    <div className="journey-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1440 5000" preserveAspectRatio="none">
        <path className="journey-trail-shadow" d={trailPath} />
        <path className="journey-trail-surface" d={trailPath} />
        <path className="journey-trail-center" d={trailPath} />
      </svg>
    </div>
  );
}

export default JourneyBackdrop;
