"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS } from "@/data/constants";
import { sleep } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";

import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 400, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.15, y: 0.15, z: 0.15 },
      position: { x: 0, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  about: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
  education: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 500, y: -250, z: 0 },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
};

type Section = "hero" | "about" | "skills" | "projects" | "education" | "contact";

const AnimatedBackground = () => {
  const { isLoading, bypassLoading } = usePreloader();

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTouchDevice = useMediaQuery("(pointer: coarse)");
  
  // Enhanced mobile detection - consider both screen size and touch capability
  const isMobileDevice = isMobile || isTouchDevice;
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [bongoAnimation, setBongoAnimation] = useState<{
    start: () => void;
    stop: () => void;
  }>();
  const [keycapAnimtations, setKeycapAnimtations] = useState<{
    start: () => void;
    stop: () => void;
  }>();

  const keyboardStates = (section: Section) => {
    return STATES[section][isMobile ? "mobile" : "desktop"];
  };

  const handleMouseHover = (e: SplineEvent) => {
    if (!splineApp || selectedSkill?.name === e.target.name) return;

    // Only handle hover interactions when in skills section
    if (activeSection !== "skills") {
      return;
    }

    if (e.target.name === "body" || e.target.name === "platform") {
      setSelectedSkill(null);
      if (splineApp.getVariable("heading") && splineApp.getVariable("desc")) {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
    } else {
      if (!selectedSkill || selectedSkill.name !== e.target.name) {
        const skill = SKILLS[e.target.name as SkillNames];
        setSelectedSkill(skill);
      }
    }
  };

  // handle keyboard press interaction
  useEffect(() => {
    if (!selectedSkill || !splineApp) return;
    splineApp.setVariable("heading", selectedSkill.label);
    splineApp.setVariable("desc", selectedSkill.shortDescription);
  }, [selectedSkill]);

  // Clear selectedSkill when leaving skills section
  useEffect(() => {
    if (activeSection !== "skills" && selectedSkill) {
      setSelectedSkill(null);
    }
  }, [activeSection, selectedSkill]);

  // handle keyboard heading and desc visibility
  useEffect(() => {
    if (!splineApp) return;
    
    // Find all possible text objects
    const textDesktop = splineApp.findObjectByName("text-desktop");
    const textMobile = splineApp.findObjectByName("text-mobile");
    const textDesktopDark = splineApp.findObjectByName("text-desktop-dark");
    const textDesktopLight = splineApp.findObjectByName("text-desktop-light");
    const textMobileDark = splineApp.findObjectByName("text-mobile-dark");
    const textMobileLight = splineApp.findObjectByName("text-mobile-light");
    
    // Debug: Log which text objects are found
    console.log("Text objects found:", {
      textDesktop: !!textDesktop,
      textMobile: !!textMobile,
      textDesktopDark: !!textDesktopDark,
      textDesktopLight: !!textDesktopLight,
      textMobileDark: !!textMobileDark,
      textMobileLight: !!textMobileLight,
      isMobile,
      isTouchDevice,
      isMobileDevice,
      activeSection
    });
    
    // Get all text objects for easier management
    const allTextObjects = [
      textDesktop, textMobile, 
      textDesktopDark, textDesktopLight, 
      textMobileDark, textMobileLight
    ].filter(Boolean); // Remove undefined objects
    
    // Hide all text objects if not in skills section
    if (activeSection !== "skills") {
      allTextObjects.forEach(obj => {
        if (obj) obj.visible = false;
      });
      return;
    }
    
    // Hide all text objects first
    allTextObjects.forEach(obj => {
      if (obj) obj.visible = false;
    });
    
    // Show the appropriate text object based on device
    if (!isMobileDevice) {
      // Desktop view - prioritize text-desktop, fallback to text-desktop-light
      if (textDesktop) {
        textDesktop.visible = true;
      } else if (textDesktopLight) {
        textDesktopLight.visible = true;
      }
    } else {
      // Mobile view - prioritize text-mobile, fallback to text-mobile-light
      if (textMobile) {
        textMobile.visible = true;
      } else if (textMobileLight) {
        textMobileLight.visible = true;
      }
    }
  }, [splineApp, isMobileDevice, activeSection]);

  // initialize gsap animations
  useEffect(() => {
    handleSplineInteractions();
    handleGsapAnimations();
    setBongoAnimation(getBongoAnimation());
    setKeycapAnimtations(getKeycapsAnimation());
    
    // Ensure bongo cat is hidden on initial load
    if (splineApp) {
      const framesParent = splineApp.findObjectByName("bongo-cat");
      const frame1 = splineApp.findObjectByName("frame-1");
      const frame2 = splineApp.findObjectByName("frame-2");
      if (framesParent) framesParent.visible = false;
      if (frame1) frame1.visible = false;
      if (frame2) frame2.visible = false;
    }
  }, [splineApp]);

  // Update interactions when activeSection changes
  useEffect(() => {
    handleSplineInteractions();
  }, [activeSection, splineApp]);

  useEffect(() => {
    let rotateKeyboard: gsap.core.Tween;
    let teardownKeyboard: gsap.core.Tween;
    (async () => {
      if (!splineApp) return;
      const kbd: SPEObject | undefined = splineApp.findObjectByName("keyboard");
      if (!kbd) return;
      rotateKeyboard = gsap.to(kbd.rotation, {
        y: Math.PI * 2 + kbd.rotation.y,
        duration: 10,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        ease: "back.inOut",
        delay: 2.5,
      });
      teardownKeyboard = gsap.fromTo(
        kbd.rotation,
        {
          y: 0,
          // x: -Math.PI,
          x: -Math.PI,
          z: 0,
        },
        {
          y: -Math.PI / 2,
          duration: 5,
          repeat: -1,
          yoyo: true,
          yoyoEase: true,
          // ease: "none",
          delay: 2.5,
          immediateRender: false,
          paused: true,
        }
      );
      if (activeSection === "hero") {
        rotateKeyboard.restart();
        teardownKeyboard.pause();
      } else if (activeSection === "contact") {
        rotateKeyboard.pause();
      } else {
        rotateKeyboard.pause();
        teardownKeyboard.pause();
      }
      if (activeSection === "skills") {
      } else {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
      if (activeSection === "projects") {
        await sleep(300);
        bongoAnimation?.start();
        // Hide the keyboard completely in projects section
        if (kbd) {
          kbd.visible = false;
        }
      } else if (activeSection === "education") {
        // Hide the keyboard completely in education section
        if (kbd) {
          kbd.visible = false;
        }
      } else {
        await sleep(200);
        bongoAnimation?.stop();
        // Show the keyboard in other sections
        if (kbd) {
          kbd.visible = true;
        }
      }
      if (activeSection === "contact") {
        await sleep(600);
        teardownKeyboard.restart();
        keycapAnimtations?.start();
      } else {
        await sleep(600);
        teardownKeyboard.pause();
        keycapAnimtations?.stop();
      }
    })();
    return () => {
      if (rotateKeyboard) rotateKeyboard.kill();
      if (teardownKeyboard) teardownKeyboard.kill();
    };
  }, [activeSection, splineApp]);

  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  const router = useRouter();
  //reveal keycaps
  useEffect(() => {
    const hash = activeSection === "hero" ? "#" : `#${activeSection}`;
    router.push("/" + hash, { scroll: false });
    if (!splineApp || isLoading || keyboardRevealed) return;
    revealKeyCaps();
  }, [splineApp, isLoading, activeSection]);
  const revealKeyCaps = async () => {
    if (!splineApp) return;
    const kbd = splineApp.findObjectByName("keyboard");
    if (!kbd) return;
    
    kbd.visible = true;
    await sleep(400);
    
    setKeyboardRevealed(true);
    gsap.fromTo(
      kbd?.scale,
      { x: 0.01, y: 0.01, z: 0.01 },
      {
        x: keyboardStates(activeSection).scale.x,
        y: keyboardStates(activeSection).scale.y,
        z: keyboardStates(activeSection).scale.z,
        duration: 1.5,
        ease: "elastic.out(1, 0.6)",
      }
    );

    const allObjects = splineApp.getAllObjects();
    const keycaps = allObjects.filter((obj) => obj.name === "keycap");
    await sleep(900);
    if (isMobileDevice) {
      const mobileKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-mobile"
      );
      mobileKeyCaps.forEach((keycap, idx) => {
        keycap.visible = true;
      });
    } else {
      const desktopKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-desktop"
      );
      desktopKeyCaps.forEach(async (keycap, idx) => {
        await sleep(idx * 70);
        keycap.visible = true;
      });
    }
    keycaps.forEach(async (keycap, idx) => {
      keycap.visible = false;
      await sleep(idx * 70);
      keycap.visible = true;
      gsap.fromTo(
        keycap.position,
        { y: 200 },
        { y: 50, duration: 0.5, delay: 0.1, ease: "bounce.out" }
      );
    });
  };
  const handleSplineInteractions = () => {
    if (!splineApp) return;
    
    // Only add event listener when in skills section
    if (activeSection === "skills") {
      splineApp.addEventListener("mouseHover", handleMouseHover);
    } else {
      // Remove event listener when not in skills section
      splineApp.removeEventListener("mouseHover", handleMouseHover);
    }
    
    // Ensure all skill objects are visible
    Object.values(SKILLS).forEach(skill => {
      const obj = splineApp.findObjectByName(skill.name);
      if (obj) {
        obj.visible = true;
      }
    });
  };
  const handleGsapAnimations = () => {
    if (!splineApp) return;
    const kbd: SPEObject | undefined = splineApp.findObjectByName("keyboard");
    if (!kbd || !splineContainer.current) return;
    gsap.set(kbd.scale, {
      ...keyboardStates("hero").scale,
    });
    gsap.set(kbd.position, {
      ...keyboardStates("hero").position,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        onEnter: () => {
          setActiveSection("skills");
          gsap.to(kbd.scale, {
            ...keyboardStates("skills").scale,
            duration: 1,
          });
          gsap.to(kbd.position, {
            ...keyboardStates("skills").position,
            duration: 1,
          });
          gsap.to(kbd.rotation, {
            ...keyboardStates("skills").rotation,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setActiveSection("hero");
          gsap.to(kbd.scale, { ...keyboardStates("hero").scale, duration: 1 });
          gsap.to(kbd.position, {
            ...keyboardStates("hero").position,
            duration: 1,
          });
          gsap.to(kbd.rotation, {
            ...keyboardStates("hero").rotation,
            duration: 1,
          });
          // gsap.to(kbd.rotation, { x: 0, duration: 1 });
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        onEnter: () => {
          setActiveSection("projects");
          gsap.to(kbd.scale, {
            ...keyboardStates("projects").scale,
            duration: 1,
          });
          gsap.to(kbd.position, {
            ...keyboardStates("projects").position,
            duration: 1,
          });
          gsap.to(kbd.rotation, {
            ...keyboardStates("projects").rotation,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setActiveSection("skills");
          gsap.to(kbd.scale, {
            ...keyboardStates("skills").scale,
            duration: 1,
          });
          gsap.to(kbd.position, {
            ...keyboardStates("skills").position,
            duration: 1,
          });
          gsap.to(kbd.rotation, {
            ...keyboardStates("skills").rotation,
            duration: 1,
          });
          // gsap.to(kbd.rotation, { x: 0, duration: 1 });
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#education",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        onEnter: () => {
          setActiveSection("education");
          gsap.to(kbd.scale, {
            ...keyboardStates("education").scale,
            duration: 1,
          });
          gsap.to(kbd.position, {
            ...keyboardStates("education").position,
            duration: 1,
          });
          gsap.to(kbd.rotation, {
            ...keyboardStates("education").rotation,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setActiveSection("projects");
          gsap.to(kbd.scale, {
            ...keyboardStates("projects").scale,
            duration: 1,
          });
          gsap.to(kbd.position, {
            ...keyboardStates("projects").position,
            duration: 1,
          });
          gsap.to(kbd.rotation, {
            ...keyboardStates("projects").rotation,
            duration: 1,
          });
          // gsap.to(kbd.rotation, { x: 0, duration: 1 });
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 30%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        onEnter: () => {
          setActiveSection("contact");
          gsap.to(kbd.scale, {
            ...keyboardStates("contact").scale,
            duration: 1,
          });
          gsap.to(kbd.position, {
            ...keyboardStates("contact").position,
            duration: 1,
          });
          gsap.to(kbd.rotation, {
            ...keyboardStates("contact").rotation,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          setActiveSection("education");
          gsap.to(kbd.scale, {
            ...keyboardStates("education").scale,
            duration: 1,
          });
          gsap.to(kbd.position, {
            ...keyboardStates("education").position,
            duration: 1,
          });
          gsap.to(kbd.rotation, {
            ...keyboardStates("education").rotation,
            duration: 1,
          });
          // gsap.to(kbd.rotation, { x: 0, duration: 1 });
        },
      },
    });
  };
  const getBongoAnimation = () => {
    const framesParent = splineApp?.findObjectByName("bongo-cat");
    const frame1 = splineApp?.findObjectByName("frame-1");
    const frame2 = splineApp?.findObjectByName("frame-2");
    if (!frame1 || !frame2 || !framesParent)
      return { start: () => {}, stop: () => {} };

    let interval: NodeJS.Timeout;
    const start = () => {
      let i = 0;
      framesParent.visible = true;
      interval = setInterval(() => {
        if (i % 2) {
          frame1.visible = false;
          frame2.visible = true;
        } else {
          frame1.visible = true;
          frame2.visible = false;
        }
        i++;
      }, 100);
    };
    const stop = () => {
      clearInterval(interval);
      framesParent.visible = false;
      frame1.visible = false;
      frame2.visible = false;
    };
    return { start, stop };
  };
  const getKeycapsAnimation = () => {
    if (!splineApp) return { start: () => {}, stop: () => {} };

    let tweens: gsap.core.Tween[] = [];
    const start = () => {
      removePrevTweens();
      Object.values(SKILLS)
        .sort(() => Math.random() - 0.5)
        .forEach((skill, idx) => {
          const keycap = splineApp.findObjectByName(skill.name);
          if (!keycap) return;
          const t = gsap.to(keycap?.position, {
            y: Math.random() * 200 + 200,
            duration: Math.random() * 2 + 2,
            delay: idx * 0.6,
            repeat: -1,
            yoyo: true,
            yoyoEase: "none",
            ease: "elastic.out(1,0.3)",
          });
          tweens.push(t);
        });
    };
    const stop = () => {
      removePrevTweens();
      Object.values(SKILLS).forEach((skill) => {
        const keycap = splineApp.findObjectByName(skill.name);
        if (!keycap) return;
        const t = gsap.to(keycap?.position, {
          y: 0,
          duration: 4,
          repeat: 1,
          ease: "elastic.out(1,0.8)",
        });
        tweens.push(t);
      });
      setTimeout(removePrevTweens, 1000);
    };
    const removePrevTweens = () => {
      tweens.forEach((t) => t.kill());
    };
    return { start, stop };
  };
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          ref={splineContainer}
          onLoad={(app: Application) => {
            setSplineApp(app);
            bypassLoading();
          }}
          scene="https://prod.spline.design/C6fA-ZqiFk3ns1mm/scene.splinecode"
        />
      </Suspense>
    </>
  );
};

export default AnimatedBackground;
