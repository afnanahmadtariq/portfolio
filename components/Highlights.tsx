import {useState } from "react";
import Image from "next/image";

export default function Highlights() {
  const [showSecond, setShowSecond] = useState(false);

  const handleRightArrow = () => {
    setShowSecond(true);
  };

  const handleDownArrow = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="highlights" className="relative h-[calc(100vh-4rem)] bg-gradient-to-br from-white to-blue-100 w-full flex items-center justify-center px-4 py-20 pt-32 overflow-hidden">
      <div className="w-full relative h-full">
        <div
          className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: showSecond ? "translateX(-100%)" : "translateX(0)",
            zIndex: showSecond ? 10 : 20,
          }}
        >
          <div className="flex flex-col items-center justify-center gap-8 px-4 sm:px-0 relative h-full">
            <h2 className="text-3xl font-bold mb-4">First Section</h2>
            <p className="mb-6 text-lg text-gray-700">This is the first section. Click the arrow to go to the next section.</p>
            <button
              aria-label="Go to second section"
              onClick={handleRightArrow}
              className="p-2 sm:p-4 bg-gradient-to-br from-white to-blue-100 border border-blue-400 opacity-60 hover:opacity-100 text-blue-400 rounded-full transition animate-bounce-x flex items-center justify-center absolute right-7 sm:right-8 top-1/2 -translate-y-1/2 z-20"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
            >
              <svg width="24" height="24" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: showSecond ? "translateX(0)" : "translateX(100%)",
            zIndex: showSecond ? 20 : 10,
          }}
        >
          <div className="flex flex-col items-center justify-center gap-8 w-full relative h-full px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-1 sm:mb-2 ">Responsive Design Skills</h2>
            <p className="mb-4 text-sm sm:text-lg text-gray-700 text-center max-w-4xl">
              I specialize in creating responsive web designs that look great on any device. Below are examples of my work showcased on different screens, including mobile, tablet, and desktop. Each layout adapts seamlessly to the device, ensuring a consistent and engaging user experience.
            </p>
            <div className="flex flex-wrap items-end justify-center gap-6 w-full">
              <div className="flex flex-col items-center">
                <Image src="/media/macbook.png" alt="MacBook screenshot" width={384} height={240} className="w-48 sm:w-[36rem] h-auto" />
                <span className="mt-2 text-sm text-gray-600">Desktop</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/media/iPad Pro.png" alt="iPad Pro screenshot" width={768} height={1024} className="w-16 sm:w-56 h-auto" />
                <span className="mt-2 text-sm text-gray-600">Tablet</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/media/iPhone X.png" alt="iPhone X screenshot" width={375} height={812} className="w-12 sm:w-28 h-auto" />
                <span className="mt-2 text-sm text-gray-600">Mobile</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/media/apple watch.png" alt="Apple Watch screenshot" width={368} height={448} className="w-10 sm:w-16 h-auto" />
                <span className="mt-2 text-sm text-gray-600">Watch</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8 justify-center">
              <button
                aria-label="Scroll to skills section"
                onClick={handleDownArrow}
                className="p-2 sm:p-4 bg-gradient-to-br from-white to-blue-100 border border-blue-400 opacity-60 hover:opacity-100 text-blue-400 rounded-full transition animate-bounce flex items-center justify-center absolute -bottom-14 sm:-bottom-6 left-1/2 -translate-x-1/2 z-20"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
              >
                <svg width="24" height="24" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 8l7 8 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                aria-label="Reset to first section"
                onClick={() => setShowSecond(false)}
                className="p-2 sm:p-4 bg-gradient-to-br from-white to-blue-100 border border-blue-400 opacity-60 hover:opacity-100 text-blue-400 rounded-full transition animate-bounce-x flex items-center justify-center absolute left-7 sm:left-8 top-1/2 -translate-y-1/2 z-20"
              >
                <svg width="24" height="24" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}