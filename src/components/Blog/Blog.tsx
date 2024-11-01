import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './Blog.module.css';

export function Blog() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>A fully featured React components library</Title>
      </Container>
    </div>
  );
}
