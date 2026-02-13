
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import firstlogo from "../../Assets/3stLG.png";
import newlogo from "../../Assets/a.png";

export default function LogoSwitcher1() {
  const containerRef = useRef(null);
  const tl = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const first = containerRef.current.querySelector(".first-logo");
      const second = containerRef.current.querySelector(".second-logo");

      // Initial state
      gsap.set(first, {
        x: 0,
        y: 0,
        scale: 1,
        transformOrigin: "top right",
        zIndex: 10,
      });

      gsap.set(second, {
        opacity: 0,
        scale: 0.9,
        zIndex: 5,
      });

      // Timeline with smooth easing
      tl.current = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out", duration: 0.65 },
      });

      tl.current
        .to(first, { x: 25, y: -20, scale: 0.55 }, 0)
        .to(second, { opacity: 1, scale: 1 }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = () => tl.current.play();
  const handleLeave = () => tl.current.reverse();

  return (
    <Link
      to="/"
      ref={containerRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className=" mt-3 relative w-48 h-24 flex items-center justify-center overflow-visible transition-all duration-500 ease-in-out"
    >
      <img
        src={firstlogo}
        alt="GX img"
        className="first-logo absolute h-12"
      />
      <img
        src={newlogo}
        alt="gxperts img"
        className="second-logo absolute h-14"
      />
    </Link>
  );
}
