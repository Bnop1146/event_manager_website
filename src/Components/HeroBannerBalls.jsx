import React, { useEffect } from 'react';
import HeroTextImage from '../assets/images/Mie Knudsen small caps.png';

const HeroBannerBalls = () => {

  useEffect(() => {
    // Define colors and number of balls
    const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
    const numBalls = 50;
    const balls = [];
    
    // Create balls dynamically and add them to the container
    const container = document.querySelector(".ball-container");

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(0)`; // Start small for pop effect
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;

      balls.push(ball);
      container.append(ball);
    }

    // Animate the balls with a pop-out effect
    balls.forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      const anim = el.animate(
        [
          { transform: "scale(0)", opacity: 0 },  // Pop-out effect from small size
          { transform: `scale(1) translate(${to.x}rem, ${to.y}rem)`, opacity: 0.7 }
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );

      // Stop animation after 10 seconds
      setTimeout(() => {
        anim.pause();
      }, 10000); // Adjust time as needed
    });
  }, []);

  return (
    <div className="main-bg-snow relative w-full h-screen flex justify-center items-center overflow-hidden px-2 sm:px-6 lg:px-8 pt-4">
      <div className="ball-container absolute w-full h-full pointer-events-none z-0"></div>
      
      {/* Hero content */}
      <div className="text-center relative z-10">
        <img src={HeroTextImage} className='mb-14' alt='Hero text' />
        <h1 className="font-heading text-3xl text-white mb-24">
          Koordinerende projektleder<br />- en del af dit team
        </h1>
        <button className="font-heading font-semibold text-2xl outline outline-offset-2 outline-secondary-color text-white py-4 px-16 rounded-xl hover:bg-secondary-color transition duration-300 floating-button">
          Kontakt mig
        </button>
      </div>
    </div>
  );
};

export default HeroBannerBalls;
