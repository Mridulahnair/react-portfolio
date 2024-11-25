import { Button, Container, Group, Image, Text, Title } from '@mantine/core';
import image from '../../assets/hero.jpg';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
            <Title className={classes.title}>
            Mridula is an Interaction designer inspired by
            functional designs that highlight human experience 
            </Title>
          
            <hr style={{ width: '50%', margin: '10px 0', border: '1px solid #ccc' }} />
          
          <Text className={classes.subtitle} c="dimmed" mt="md">
          Dive in to see my journey, projects, and what inspires me. Whether you're curious about my work or just exploring, I hope you find something here that resonates with you
          </Text>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control} component="a" href="/react-portfolio/#contact">
              Contact me
            </Button>
          </Group>
        </div>
        <div className={classes.imageDiv}>
          <Image src={image} className={classes.image} />
        </div>
      </div>
    </Container>
  );
}
