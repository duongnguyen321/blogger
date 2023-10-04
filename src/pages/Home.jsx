import Tag from '@/components/Tag';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import Notify from '@/components/Notify';
import Section from '@/components/Section';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <Section>
      <Avatar name="Nguyen Minh Nhat Duong" />
      <h1>Home</h1>
      <Button title="Disabled" disabled />
      <Button
        title="About"
        onClick={() => {
          navigate('/about');
        }}
      />
      <Button title="Disabled" disabled type="secondary" />
      <Button
        title="About"
        onClick={() => {
          navigate('/about');
        }}
        type="secondary"
      />
      <Notify message="Hello World!" type="success" />
      <Notify
        message="Hello World!"
        type="failed"
        timeout="4"
        position="bottom-right"
      />
      <Tag to="/about" text="about" />
    </Section>
  );
}
