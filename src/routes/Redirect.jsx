import Button from 'components/Button';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirect({ path }) {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(path);
    }, 3000);
  }, []);
  return (
    <>
      <h1 style={{ color: 'white' }}>Redirecting...</h1>
      <Button
        onClick={() => {
          navigate('/');
        }}
        title="Go Home!"
      />
    </>
  );
}
