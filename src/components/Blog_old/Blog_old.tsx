import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import classes from "./Blog.module.css";

export function Blog() {
  return (
    <Container className={classes.container} size="md">
      <Title className={classes.title}>Blog of Discoveries</Title>
    </Container>
  );
}
