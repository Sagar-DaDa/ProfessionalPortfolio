import React, { useState, useEffect } from 'react';
import './css/helloAnimation.css';

const languages = [
  'Hello', 'Bonjour', 'Hola', 'नमस्कार', 'Hallo', 'こんにちは', 'Привет',
  'Ciao', 'Olá', '你好', '안녕하세요', 'Merhaba', 'مرحبا', 'Sawasdee', 'Xin chào'
];

const HelloAnimation = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const animationDuration = 3; // seconds
    const timeoutId = setTimeout(() => {
      setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, animationDuration * 1000);

    return () => clearTimeout(timeoutId);
  }, [currentLanguageIndex]);

  return (
    <div className="hello-container mb-2">
      <span className="hello-text font-pacifico" style={{
        color: "transparent",
        backgroundImage: "radial-gradient( circle 992px at 1.7% 2%,  rgba(6,255,7,1) 0%, rgba(0,147,243,1) 12.7%, rgba(251,0,182,1) 25.9%, rgba(255,129,14,1) 38.8%, rgba(197,255,14,1) 52%, rgba(14,255,125,1) 64.6%, rgba(14,71,255,1) 76.9%, rgba(187,14,255,1) 89.5%, rgba(255,14,14,1) 100.2% )"
      }}>{languages[currentLanguageIndex]},</span>
    </div>
  );
};

export default HelloAnimation;
