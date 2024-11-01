import { Accordion, Container, Grid, Image, Title } from '@mantine/core';
import image from '../../assets/headshot.jpg';
import classes from './About.module.css';

// const placeholder =
//   'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export function About() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
            All About Me
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>How did my architectural background influence my transition to UX design?</Accordion.Control>
                <Accordion.Panel>After four years in architecture, I found that my favorite part of the job was designing with people’s needs in mind. This realization prompted me to shift to UX design, where I could have a more direct impact on user experiences through creativity and human-centered problem-solving.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>What skills do I carry over from architecture to UX design?</Accordion.Control>
                <Accordion.Panel>My experience in architecture taught me to think spatially, plan thoughtfully, and prioritize user-centric designs. Now, as a UX designer, I apply these skills to digital spaces, creating intuitive and meaningful layouts and interactions.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>What am I studying at the University of Limerick?</Accordion.Control>
                <Accordion.Panel>I’m currently focused on Interaction and Experience Design, where I’m diving into user research, prototyping, and design thinking. This program equips me with a solid foundation in UX principles and hands-on projects to hone my practical skills.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                What excites me most about working in UX design?
                </Accordion.Control>
                <Accordion.Panel>I thrive on the collaborative process of understanding user needs and crafting solutions that are both functional and aesthetically pleasing. The shift from physical to digital design has been thrilling, and I’m passionate about the challenge of creating seamless user journeys.</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
