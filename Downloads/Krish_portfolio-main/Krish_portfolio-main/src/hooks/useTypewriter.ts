import { useState, useEffect } from 'react';

const roles = [
  'Software Engineer',
  'Software Developer',
  '.NET Specialist',
  'WPF & C# Developer',
];

export function useTypewriter() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 1500);
      return;
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex(prev => prev + (deleting ? -1 : 1));
      setText(current.substring(0, charIndex + (deleting ? -1 : 1)));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return text;
}
