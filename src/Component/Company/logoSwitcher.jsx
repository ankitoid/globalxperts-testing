import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import firstlogo from "../../Assets/3stLG.png";
import newlogo from "../../Assets/a.png";

const LogoSwitcher = () => {
  const firstLogoRef = useRef(null);
  const secondLogoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const first = firstLogoRef.current;
    const second = secondLogoRef.current;
    const container = containerRef.current;

    // Set initial state for second logo
    gsap.set(second, {
      x: 20, // off to the right
      opacity: 0,
      scale: 1.15,
    });

    const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });

    // Animate first logo out and second logo in with slight gap
    tl.to(first, {
      x: -45,
      duration: 0.5,
    }).to(
      second,
      {
        x: 40, // shows right next to first with ~5px space
        opacity: 1,
        scale: 1.2,
        duration: 0.55,
      },
      "<0.25" // overlap a bit for smooth transition
    );

    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <Link to="/" className="group">
      <div
        ref={containerRef}
        className="relative flex items-center w-[200px] h-14 overflow-visible pl-8"
      >
        <img
          ref={firstLogoRef}
          src={firstlogo}
          alt="First Logo"
          className="h-8 z-10 relative"
        />
        <img
          ref={secondLogoRef}
          src={newlogo}
          alt="Second Logo"
          className="absolute h-12 z-0 left-0 pointer-events-none"
        />
      </div>
    </Link>
  );
};

export default LogoSwitcher;
