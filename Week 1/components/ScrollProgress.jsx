import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[1px] z-50 bg-transparent">
      <div
        className="h-full transition-all duration-150"
        style={{
          width: `${progress}%`,
          backgroundColor: progress > 90 ? '#D9411E' : '#1A1A1A',
        }}
      />
    </div>
  );
}