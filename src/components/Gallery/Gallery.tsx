import { Container, Image } from '@mantine/core';
import image from '../../assets/underconst.jpg';
import classes from './Gallery.module.css';

export function Gallery() {
  return (
    <>
      <Container className={classes.root}>
        <Image src={image} radius="md" />
      </Container>
    </>
  );
}
