import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/all';

export default function Example() {
  useEffect(() => {
    gsap.fromTo('.astro', { x: 0 }, { x: 100 });
  });
  return (
    <div className="astro">
      <span>example</span>
    </div>
  );
}
