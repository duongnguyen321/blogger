import Avatar from 'components/Avatar';
import Button from 'components/Button';
import Notify from 'components/Notify';
import Section from 'components/Section';
import Tag from 'components/Tag';
import React from 'react';
import { Links } from 'services/helpers';

export default function Home() {
  return (
    <Section>
      <Avatar name="Nguyen Minh Nhat Duong" />
      <h1>Home</h1>
      <Button title="Home" />
      <Notify message="Hello World!" type="success" />
      <Notify
        message="Hello World!"
        type="failed"
        timeout="4"
        position="bottom-right"
      />
      <Links to="/about">About</Links>
      <Tag to="/about" text="about" />
    </Section>
  );
}
