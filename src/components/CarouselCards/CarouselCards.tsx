import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { useState } from 'react';
import { Button, Container, Modal, Paper, rem, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CarouselCards.module.css';
import headshot from '../../assets/headshot.jpg';
import dramatic from '../../assets/dramatic.jpg';
import hero from '../../assets/hero.jpg';

interface CardProps {
  image: string;
  title: string;
  category: string;
  content: string;
}

function Card({ image, title, category, content }: CardProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>
        <Button variant="white" color="dark" onClick={() => setOpened(true)}>
          Behind It
        </Button>
      </Paper>

      <Modal opened={opened} onClose={() => setOpened(false)} size="45rem">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={image}
            alt={title}
            style={{ width: 'auto', maxHeight: '700px', margin: '1rem', maxWidth: '600px' }}
          />
          <Title order={2} style={{ marginBottom: '1rem', fontWeight: 700, fontSize: '1.5rem' }}>
            {title}
          </Title>
          <Text size="sm" style={{ textAlign: 'center' }}>
            {content}
          </Text>
        </div>
      </Modal>
    </>
  );
}

const data = [
  {
    image: headshot,
    title: 'Business type Head Shot',
    category: 'photograpghy',
    content:
      'In this “professional type headshot” I decided to go with a crossed arm pose with face slightly tilted towards the light to convey confidence and openness making it a well-suited picture for formal use for professional branding on a website for instance.  I used a fixed focal length of 24mm, which isn’t usually the first choice for a headshot, but I opted for it to capture a wider frame and show a bit more movement. I wanted a photo that felt natural and relaxed, while still maintaining a formal tone, rather than a traditional headshot.The aperture was set to f/1.8 to let in as much light as possible, given that this photo was taken indoors in a low-light setting. The shutter speed used was 1/10s—a slower speed to allow more light to enter. Additionally, I set the ISO to 100 to keep the image sharp and clear, despite the limited lighting ',
  },
  {
    image: dramatic,
    title: 'Aesthetic shot with a bit of Drama ',
    category: 'photography',
    content:
      'In this portrait, I framed the scene with a focus on the play between light and shadows, using my phone\'s flashlight to create an intense dramatic vibe. I went with a 35 mm focal length to capture more of the scene. I picked an aperture of f/2.5 because I wanted the subject (myself) to be sharp while the background softly blurred out ( further blur was taken care while editing the image. With a shutter speed of 1/15 seconds, I got just the right amount of light in, and keeping the ISO at 160 helped keep the noise down and the photo nice and sharp',
  },
  {
    image: hero,
    title: 'Passionate Perspectives',
    category: 'Photography',
    content:
      'I absolutely love being outdoors with a book in hand. There’s something magical about lying on the grass, where the warmth wraps around me and the scent of nature fills the air—even if I have to wear a jacket because it’s cold here in Ireland. That’s precisely what this photo captures: me in my most comfortable self. The image was taken with a focal length of 24 mm, which allowed for a wider view, bringing the surrounding grass into the frame and making it easier to connect me with my environment. The aperture was set to f/3.2, keeping my eyes in focus while gently blurring the grass around me, creating a sense of infinity as it expands outwards. I also used a shutter speed of 1/40 seconds, which was ideal for this situation since it ensured enough light entered the frame, even on a cloudy day.',
  },
  
];

export function CarouselCards() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    // <Carousel.Item>
    <Card {...item} />
    // </Carousel.Item>
  ));
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      // partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <Container className={classes.container} size="md">
      <Carousel
        responsive={responsive}
        partialVisible={true}
        // swipeable={false}
        // draggable={false}
        // showDots={true}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {slides}
      </Carousel>
    </Container>
  );
}
