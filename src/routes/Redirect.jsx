import propTypes from "prop-types"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';

/**
 * Define the Redirect component
 * @param {String} path The path to redirect
 */

Redirect.propTypes = {
  path: propTypes.string
}
export default function Redirect({ path }) {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(path);
    }, 3000);
  }, [navigate, path]);
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
