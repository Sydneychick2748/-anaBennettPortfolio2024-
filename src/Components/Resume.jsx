import "./Resume.scss";
import React, { useState, useEffect,useRef } from "react";



const Resume = () => {
  const svgContainerRef = useRef(null);
  const [lastClickPosition, setLastClickPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [circleObjects, setCircleObjects] = useState([]);

  useEffect(() => {
    const strengthMultiplier = 0.05;
    const angleMultiplier = -0.505;
    const velocityMultiplier = 0.005;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const circles = [
      { r: 10, x: windowWidth * 0.9, y: windowHeight * 0.5, color: "var(--white)", border: "transparent" },
      { r: 20, x: windowWidth * 0.89, y: windowHeight * 0.5, color: "var(--white)", border: "transparent" },
      { r: 30, x: windowWidth * 0.88, y: windowHeight * 0.5, color: "var(--gray-light)", border: "transparent" },
      { r: 120, x: windowWidth * 0.1, y: windowHeight * 0.9, color: "var(--blue-light)", border: "transparent" },
      { r: 300, x: windowWidth * 0.6, y: windowHeight * 0.4, color: "transparent", border: "var(--yellow)" },
    ];

    const initialCircles = circles.map((circle) => ({
      element: createCircle(circle.r, circle.x, circle.y, circle.color, circle.border),
      velocity: { x: 0, y: 0 },
      acceleration: { x: 0, y: 0 },
    }));

    setCircleObjects(initialCircles);
    initialCircles.forEach(circle => svgContainerRef.current.appendChild(circle.element));

    const moveCircles = () => {
      const mouseX = lastClickPosition.x;
      const mouseY = lastClickPosition.y;

      setCircleObjects(prevCircles =>
        prevCircles.map(circle => {
          circle.acceleration = applyAttraction(circle, mouseX, mouseY);
          return moveCircle(circle, velocityMultiplier, strengthMultiplier, angleMultiplier);
        })
      );

      requestAnimationFrame(moveCircles);
    };

    const handleResize = () => {
      setLastClickPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    };

    window.addEventListener('resize', handleResize);
    moveCircles();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [lastClickPosition]);

  const createCircle = (radius, x, y, color, borderColor) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", radius);
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("fill", color);
    circle.setAttribute("stroke", borderColor);
    return circle;
  };

  const applyAttraction = (circle, mouseX, mouseY) => {
    const currentX = parseFloat(circle.element.getAttribute("cx"));
    const currentY = parseFloat(circle.element.getAttribute("cy"));

    const attractionStrength = 0.05;

    const dx = mouseX - currentX;
    const dy = mouseY - currentY;

    const angle = Math.atan2(dy, dx);
    const clockwiseAngle = angle + Math.PI / -0.505;

    const ax = Math.cos(clockwiseAngle) * attractionStrength;
    const ay = Math.sin(clockwiseAngle) * attractionStrength;

    return { x: ax, y: ay };
  };

  const moveCircle = (circle, velocityMultiplier, strengthMultiplier, angleMultiplier) => {
    const currentX = parseFloat(circle.element.getAttribute("cx"));
    const currentY = parseFloat(circle.element.getAttribute("cy"));

    const deltaX = circle.velocity.x;
    const deltaY = circle.velocity.y;

    const newAcceleration = { x: deltaX * 0.01, y: deltaY * 0.01 };
    const newVelocity = {
      x: circle.velocity.x + circle.acceleration.x * circle.element.getAttribute("r") * velocityMultiplier,
      y: circle.velocity.y + circle.acceleration.y * circle.element.getAttribute("r") * velocityMultiplier,
    };

    const newX = currentX + newVelocity.x;
    const newY = currentY + newVelocity.y;

    circle.element.setAttribute("cx", newX);
    circle.element.setAttribute("cy", newY);

    circle.velocity = newVelocity;
    circle.acceleration = newAcceleration;

    return circle;
  };

  const updateLastClickPosition = (event) => {
    setLastClickPosition({
      x: event.clientX || (event.touches[0] && event.touches[0].clientX),
      y: event.clientY || (event.touches[0] && event.touches[0].clientY),
    });
  };

  useEffect(() => {
    window.addEventListener("mousedown", updateLastClickPosition);
    window.addEventListener("mousemove", updateLastClickPosition);
    window.addEventListener("touchstart", updateLastClickPosition);
    window.addEventListener("touchmove", updateLastClickPosition);

    return () => {
      window.removeEventListener("mousedown", updateLastClickPosition);
      window.removeEventListener("mousemove", updateLastClickPosition);
      window.removeEventListener("touchstart", updateLastClickPosition);
      window.removeEventListener("touchmove", updateLastClickPosition);
    };
  }, []);

  return (
    <div className="home">
      <div className="headline-container">
        <div id="text-behind">ANA BENNETT<br />Portfolio</div>
        <div id="text-behind-blur">ANA BENNETT<br />Portfolio</div>
        <div id="text-front">ANA BENNETT<br />Portfolio</div>
      </div>

      <div className="canvas-container">
        <svg ref={svgContainerRef} id="svg-container"></svg>
      </div>
    </div>
  );
};

export default Resume;
