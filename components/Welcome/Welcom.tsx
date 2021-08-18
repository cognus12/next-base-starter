import React from 'react';

export interface WelcomeProps {
  className?: string;
}

export const Welcome: React.FC<WelcomeProps> = ({ className }) => (
  <h1 className={className}>
    Welcome to <a href="https://nextjs.org">Next.js!</a>
  </h1>
);
