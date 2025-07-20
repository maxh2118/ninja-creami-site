import React, { useState } from 'react';

export default function ShareButton({ recipeId, initialCount }) {
  const [count, setCount] = useState(initialCount);

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: `Bekijk dit heerlijke ijsrecept!`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        // Increment count after successful share dialog opening
        const apiBase = import.meta.env.PUBLIC_API_URL;
        fetch(`${apiBase}/api/share/${recipeId}`, { method: 'POST' });
        setCount(prev => prev + 1);
      } else {
        alert("Delen wordt niet ondersteund door je browser. Kopieer de link handmatig.");
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <button onClick={handleShare} className="font-bold text-ice-green hover:underline">
      Delen ({count})
    </button>
  );
}