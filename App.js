// Fully self-contained React site ready for Netlify Drop
// Includes _redirects for Netlify to avoid 404 issues

// Project structure for Netlify:
// apology-site/
// ├── index.html
// ├── package.json
// ├── src/
// │   └── App.jsx  <- paste this code here
// └── public/
//     └── _redirects  <- add file with content: /* /index.html 200

import { useState, useEffect } from "react";

export default function App() {
  const [forgiven, setForgiven] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [sorryLevel, setSorryLevel] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const meter = setInterval(() => setSorryLevel(v => (v < 100 ? v + 1 : 100)), 60);
    return () => clearInterval(meter);
  }, []);

  function celebrate() {
    setForgiven(true);
    alert('🎉 Confetti! 🎉');
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#ffe4e1', padding: '20px', flexDirection: 'column', gap: '20px' }}>
      <h1>I messed up 😭</h1>
      <p>I can't believe I forgot our 3 month anniversary.</p>
      <p>But forgetting the date doesn't mean I forget how lucky I am to have you.</p>
      <p>You are literally my favorite person ❤️</p>

      <div style={{ width: '300px', height: '20px', background: '#ccc', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ width: sorryLevel + '%', height: '100%', background: 'pink', transition: 'width 0.3s' }}></div>
      </div>
      <p>{sorryLevel}% sorry</p>

      <p>Time I've been loving you (seconds): {seconds}</p>

      <p>Our tiny timeline 💕</p>
      <ul>
        <li>• Day we met – best accident ever</li>
        <li>• Today – 3 months with my favorite person</li>
      </ul>

      {!quizAnswered ? (
        <div>
          <p>Quick quiz: Do I love you?</p>
          <button onClick={() => setQuizAnswered(true)}>Yes</button>
          <button onClick={() => setQuizAnswered(true)}>Obviously yes</button>
        </div>
      ) : (
        <p>Correct answer 😌💖</p>
      )}

      {!forgiven ? (
        <div>
          <p>Will you forgive me? 🥺</p>
          <button onClick={celebrate}>Forgive</button>
          <button onMouseEnter={e => { e.target.style.position='relative'; e.target.style.left=Math.random()*100-50+'px'; e.target.style.top=Math.random()*20-10+'px'; }}>No</button>
        </div>
      ) : (
        <div>
          <h2>Yay!! ❤️</h2>
          <p>Thank you for forgiving me. I promise I'll make it up to you.</p>
          <p>Happy 3 months to us 💕</p>
          <h3 style={{ animation: 'bounce 1s infinite' }}>I LOVE YOU ❤️</h3>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%,100%{transform:scale(1)}
          50%{transform:scale(1.3)}
        }
      `}</style>
    </div>
  );
}
