import { useMemo } from "react";

const AnimatedBackground = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * -5,
        duration: Math.random() * 4 + 3,
        opacity: Math.random() * 0.6 + 0.2,
      })),
    []
  );

  const comets = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => ({
        id: i,
        left: Math.random() * 60 - 10,
        top: Math.random() * 40,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 8,
        size: Math.random() * 120 + 120,
        travelX: Math.random() * 60 + 60,
        travelY: Math.random() * 40 + 30,
        angle: Math.random() * 10 + 20,
      })),
    []
  );

  const constellations = useMemo(
    () => [
      {
        id: 1,
        left: 18,
        top: 22,
        scale: 0.9,
        delay: -4,
        duration: 18,
        rotation: -6,
        points: [
          [8, 12],
          [28, 8],
          [48, 20],
          [70, 16],
          [95, 32],
          [68, 55],
          [38, 48],
        ],
      },
      {
        id: 2,
        left: 72,
        top: 28,
        scale: 0.75,
        delay: -1,
        duration: 22,
        rotation: 8,
        points: [
          [12, 50],
          [30, 28],
          [52, 36],
          [72, 18],
          [96, 26],
        ],
      },
      {
        id: 3,
        left: 55,
        top: 72,
        scale: 0.85,
        delay: -6,
        duration: 20,
        rotation: -3,
        points: [
          [8, 22],
          [26, 40],
          [46, 30],
          [66, 46],
          [88, 34],
          [104, 52],
        ],
      },
    ],
    []
  );

  return (
    <div className="animated-bg space-bg" aria-hidden="true">
      <div className="space-nebula space-nebula--one" />
      <div className="space-nebula space-nebula--two" />
      <div className="space-planet space-planet--one" />
      <div className="space-planet space-planet--two" />

      {stars.map((star) => (
        <span
          key={star.id}
          className="space-star"
          style={{
            "--size": `${star.size}px`,
            "--left": `${star.left}%`,
            "--top": `${star.top}%`,
            "--delay": `${star.delay}s`,
            "--duration": `${star.duration}s`,
            "--opacity": star.opacity,
          }}
        />
      ))}

      {comets.map((comet) => (
        <span
          key={comet.id}
          className="space-comet"
          style={{
            "--left": `${comet.left}%`,
            "--top": `${comet.top}%`,
            "--delay": `${comet.delay}s`,
            "--duration": `${comet.duration}s`,
            "--size": `${comet.size}px`,
            "--travel-x": `${comet.travelX}vw`,
            "--travel-y": `${comet.travelY}vh`,
            "--angle": `${comet.angle}deg`,
          }}
        />
      ))}

      {constellations.map((constellation) => (
        <svg
          key={constellation.id}
          className="space-constellation"
          viewBox="0 0 120 80"
          style={{
            "--left": `${constellation.left}%`,
            "--top": `${constellation.top}%`,
            "--scale": constellation.scale,
            "--delay": `${constellation.delay}s`,
            "--duration": `${constellation.duration}s`,
            "--rotation": `${constellation.rotation}deg`,
          }}
        >
          <polyline
            points={constellation.points.map((p) => p.join(",")).join(" ")}
            className="space-constellation__line"
          />
          {constellation.points.map((point, index) => (
            <circle
              key={`${constellation.id}-${index}`}
              cx={point[0]}
              cy={point[1]}
              r={index % 2 === 0 ? 2.1 : 1.6}
              className="space-constellation__star"
            />
          ))}
        </svg>
      ))}
    </div>
  );
};

export default AnimatedBackground;
