import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Notify from 'components/Notify';
import Section from 'components/Section';
import Tag from 'components/Tag';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  return (
    <Section>
      <Avatar name="Nguyen Minh Nhat Duong" />
      <h1>About</h1>
      <Button title="Disabled" disabled />
      <Button
        title="Home page"
        onClick={() => {
          navigate('/');
        }}
      />
      <Button title="Disabled" disabled type="secondary" />
      <Button
        title="Home page"
        onClick={() => {
          navigate('/');
        }}
        type="secondary"
      />
      <Notify message="Hello World!" position="top-right" />
      <Notify
        message="Hello World!"
        type="failed"
        timeout="4"
        position="bottom-left"
      />
      <Tag to="/" text="home" />
    </Section>
  );
}
