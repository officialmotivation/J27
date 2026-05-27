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
        <h1 style={{padding: "0 15px", lineHeight: "3rem"}}>
           {groomName} <span style={{fontSize: "0.8rem", fontFamily: "serif"}}>(PhD)</span><span> </span><span style={{fontSize: "2rem"}}>&</span> <span> </span> {brideName} <span style={{fontSize: "0.8rem", fontFamily: "serif"}}>(B. Tech)</span><span> </span>
        </h1>
        <div style={{padding: "0 15px", display: "flex", justifyContent: "center", gap: "15px", color: "#123456"}}>
          <p style={{color: "#123456"}}>Elder<br/>S/O Sri Vishwanandham <br/> & Smt. Lova</p>
          <br/>
          <p style={{color: "#123456"}} ><br/>And</p>
          <br/>
          <p style={{color: "#123456"}}>Elder<br/>D/O Sri Kannayya<br/> & Smt. Jyothi</p>
        </div>
        <p>Wedding</p>
      </div>
    </section>
  );
}