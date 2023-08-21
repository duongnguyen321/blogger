import React from 'react';
import { Links } from 'services/helpers';

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Links to="/">Home</Links>
      <Links to="/about">About</Links>
    </>
  );
}
