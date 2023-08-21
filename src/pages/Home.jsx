import React from 'react';
import { Links } from 'services/helpers';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Links to="/">Home</Links>
      <Links to="/about">About</Links>
    </>
  );
}
