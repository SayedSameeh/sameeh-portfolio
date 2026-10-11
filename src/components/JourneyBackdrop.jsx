function JourneyBackdrop() {
  // The route starts beside the seated figures, then winds through each section
  // before reaching the torii gate centered in the footer.
  const trailPath =
    "M 1095 620 C 1240 760 1370 900 1280 1080 C 1190 1260 870 1260 760 1450 C 620 1690 900 1840 1060 2020 C 1230 2210 1030 2440 790 2520 C 550 2610 450 2810 560 3000 C 680 3200 1020 3220 1040 3440 C 1060 3650 790 3780 650 3940 C 500 4130 650 4320 850 4420 C 1030 4510 960 4730 740 4880";

  return (
    <div className="journey-backdrop" aria-hidden="true">
      <svg viewBox="0 0 1440 5000" preserveAspectRatio="none">
        <path className="journey-trail-edge" d={trailPath} />
        <path className="journey-trail-earth" d={trailPath} />
        <path className="journey-trail-gravel" d={trailPath} />
        <path className="journey-trail-stones" d={trailPath} />
      </svg>
    </div>
  );
}

export default JourneyBackdrop;
