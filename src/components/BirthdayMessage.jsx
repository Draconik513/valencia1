import { useState, useEffect } from "react";
import FallingText from "./FallingText";
import Confetti from "react-confetti";

const FloatingText = ({ text, delay = 0 }) => {
  const [first, second] = text.split(" ");
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        animation: `fadeOut 1.5s ease-out ${delay}s forwards`,
        zIndex: 10,
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-pink-400 neon-text text-center">
        <span className="block md:inline">{first}</span>
        <span className="block md:inline md:ml-2">{second}</span>
      </h1>
    </div>
  );
};

export default function BirthdayMessage({ onComplete }) {
  const [step, setStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const name = "Valencia";
  const birthDate = "23 Agustus 2002";

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 0) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 10000);
      }
      if (step < 4) {
        setStep(step + 1);
      }
      if (step === 4) {
        setTimeout(() => {
          onComplete();
        }, 15000);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [step, onComplete]);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden w-screen h-screen">
      {/* Confetti */}
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      {/* Background Falling Text */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <FallingText colors={["#ff00ff", "#ffffff"]} />
      </div>

      {/* === Kredit Lagu di Pojok Kanan Bawah === */}
      <div className="fixed bottom-2 right-4 z-50 text-[0.65rem] text-gray-300 bg-black bg-opacity-50 px-2 py-1 rounded max-w-xs text-right leading-tight">
        🎵 <strong>Eternal Love</strong> by{" "}
        <a
          href="https://www.twisterium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Twisterium
        </a>
        <br />
        Music promoted by{" "}
        <a
          href="https://www.free-stock-music.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Free-Stock-Music.com
        </a>
        <br />
        Licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by-sa/3.0/deed.en_US"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          CC BY-SA 3.0
        </a>
      </div>

      {/* Konten Utama */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 overflow-y-auto">
        {step === 0 && (
          <>
            <FloatingText text="Happy Birthday" delay={0} />
            <FloatingText text="Happy Birthday" delay={1.5} />
          </>
        )}

        {step >= 1 && (
          <div
            className={`relative z-20 text-center ${
              step === 1 ? "animate-bounceIn" : ""
            }`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-pink-400 mb-6 neon-text">
              {name}
            </h2>
          </div>
        )}

        {step >= 2 && (
          <div
            className={`relative z-20 text-center ${
              step === 2 ? "animate-fadeInUp" : ""
            }`}
          >
            <p className="text-xl md:text-3xl text-white mb-8">{birthDate}</p>
          </div>
        )}

        {step >= 3 && (
          <div
            className={`relative z-20 text-center ${
              step === 3 ? "animate-pulse" : ""
            }`}
          >
            <div className="text-3xl md:text-6xl font-bold text-pink-400 mb-8 neon-text">
              Happy 23!
            </div>
          </div>
        )}

        {step >= 4 && (
          <div
            className={`relative z-20 w-full max-w-2xl mx-auto p-4 md:p-6 mb-8 bg-black bg-opacity-70 backdrop-blur-sm rounded-xl border border-pink-400 border-opacity-50 ${
              step === 4 ? "animate-fadeIn" : ""
            }`}
          >
            <p className="text-base md:text-xl text-white leading-relaxed">
              To the most amazing woman in my life, may your birthday be as
              beautiful as you are. Every moment with you feels like a dream
              come true. I pray for your happiness, health, and success in
              everything you do. You deserve all the love in the universe. I
              love you more than words can express. love uu sayang❤️
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          70% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 0;
            transform: scale(0.9);
          }
        }

        .neon-text {
          text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff,
            0 0 40px #ff00ff;
          animation: neon-flicker 1.5s infinite alternate;
        }

        @keyframes neon-flicker {
          0%,
          19%,
          21%,
          23%,
          25%,
          54%,
          56%,
          100% {
            text-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff,
              0 0 40px #ff00ff;
          }
          20%,
          24%,
          55% {
            text-shadow: none;
          }
        }
      `}</style>
    </div>
  );
}
