import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./FloatingCouple.css";

export default function FloatingCouple({
  image,
  brideName = "",
  groomName = "",
}) {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  // DESKTOP PARALLAX
  const handleMouseMove = (e) => {
    const x =
      (window.innerHeight / 2 - e.clientY) / 25;

    const y =
      (e.clientX - window.innerWidth / 2) / 25;

    setRotate({
      x,
      y,
    });
  };

  // MOBILE GYROSCOPE
  useEffect(() => {
    const handleOrientation = (e) => {
      if (e.beta == null || e.gamma == null) return;

      setRotate({
        x: e.beta / 10,
        y: e.gamma / 8,
      });
    };

    window.addEventListener(
      "deviceorientation",
      handleOrientation
    );

    return () => {
      window.removeEventListener(
        "deviceorientation",
        handleOrientation
      );
    };
  }, []);

  return (


    <section
      className="floating-couple-section"
      onMouseMove={handleMouseMove}
    >

      <p style={{color: "#12312380", fontFamily: "Cookie", fontSize: "2rem" }}>Come together with your family</p>

      {/* IMAGE */}
      <motion.img
        src={image}
        alt=""
        className="floating-couple-image"
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
          y: [0, -12, 0],
        }}
        transition={{
          rotateX: {
            type: "spring",
            stiffness: 120,
          },
          rotateY: {
            type: "spring",
            stiffness: 120,
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* CONTENT */}
      <div className="floating-couple-content">
        <h1>
           {groomName} <span>&</span> {brideName}
        </h1>

        <p>Wedding</p>
      </div>
    </section>
  );
}