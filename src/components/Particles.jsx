import Particles from "react-tsparticles";

function BackgroundParticles() {
  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        particles: {
          number: {
            value: 40,
          },
          color: {
            value: "#00d9ff",
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.2,
          },
          move: {
            enable: true,
            speed: 0.4,
          },
        },
      }}
    />
  );
}

export default BackgroundParticles;