import { Button, Container, Group, Image, Text, Title } from '@mantine/core';
import image from '../../assets/hero.jpg';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
           Mridula Haridasan  
          </Title>
          <Text c="dimmed" mt="md">
          Dive in to see my journey, projects, and what inspires me. Whether you're curious about my work or just exploring, I hope you find something here that resonates with you
          </Text>

          {/* <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group> */}
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  );
}
