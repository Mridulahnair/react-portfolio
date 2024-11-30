import {
  Accordion,
  Container,
  Grid,
  Image,
  Title,
  Timeline,
  Text,
} from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandGit,
} from "@tabler/icons-react";
import { Group, Badge, Avatar } from "@mantine/core";

import image from "../../assets/headshot.jpg";
import classes from "./About.module.css";

const charactersList = [
  {
    id: "bender",
    image:
      "https://media.istockphoto.com/id/889894956/vector/house-repair-icon.jpg?s=612x612&w=0&k=20&c=Xg2JEuUsnLAwViMdM-gCYn1cciPGf-aoBV53h62qy4E=",
    label: "UI/UX Designer @ No Builders",
    description: "Feb 2024 - Aug 2024 . 7 mos",
    content:
      "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: "carol",
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEWmgfdA0i2eQ/company-logo_100_100/company-logo_100_100/0/1660794305126/homelane_logo?e=1740614400&v=beta&t=g31gz0U6XtgdNNDR8XjnM2fychpFTOvEjCkaIZbX6EU",
    label: "Design Expert @ HomeLane",
    description: "Apr 2021 - Jun 2022 . 1 yr 3 mos",
    content:
      "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: "homer",
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Junior Architect @ The Design",
    description: "Aug 2017 - Jan 2021 . 3 yrs 6 mos",
    content:
      "Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.",
  },
];

import { ReactNode } from "react";

interface AccordionLabelProps {
  label: ReactNode;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

export function About() {
  const items = charactersList.map((item) => {
    const [beforeAt, afterAt] = item.label.split("@");
    return (
      <Accordion.Item value={item.id} key={item.label}>
        <Accordion.Control>
          <AccordionLabel
            label={
              <>
                {beforeAt}
                <Text
                  component="span"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                  fw={700}
                >
                  @{afterAt}
                </Text>
              </>
            }
            image={item.image}
            description={item.description}
          />
        </Accordion.Control>
        <Accordion.Panel>
          <Text size="sm">{item.content}</Text>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Title order={2} ta="left" className={classes.title}>
              Education
            </Title>

            <Timeline active={2} bulletSize={25}>
              <Timeline.Item
                bullet={<IconGitBranch size={12} />}
                title="Army Public School (CBSE)"
              >
                <Text c="dimmed" size="sm">
                  High School
                </Text>
                <Text size="xs" mt={4}>
                  2010 - 2012
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconGitCommit size={12} />}
                title="JNIAS School of Planning & Architecture"
              >
                <Text c="dimmed" size="sm">
                  Bachelor of Architecuture (B.Arch)
                </Text>
                <Text size="xs" mt={4}>
                  2013 - 2018
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="Design Boat UI/UX School"
                bullet={<IconGitPullRequest size={12} />}
                lineVariant="dashed"
              >
                <Text c="dimmed" size="sm">
                  UI/UX Boot Camp
                </Text>
                <Text size="xs" mt={4}>
                  2023 - 2024
                </Text>
              </Timeline.Item>

              <Timeline.Item
                title="University of Limerick"
                bullet={<IconMessageDots size={12} />}
              >
                <Text c="dimmed" size="sm">
                  Masters in Interaction & Experience Design
                </Text>
                <Text size="xs" mt={4}>
                  2024 - Present
                </Text>
              </Timeline.Item>
            </Timeline>
          </Grid.Col>
        </Grid>
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Title order={2} ta="left" className={classes.title}>
              Work Experience
            </Title>

            <Accordion chevronPosition="right" variant="contained">
              {items}
            </Accordion>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Title order={2} ta="left" className={classes.title}>
              Skills
            </Title>

            <Group>
              <Badge
                size="lg"
                leftSection={<IconBrandHtml5 size={20} />}
                color="gray"
                radius="sm"
              >
                HTML5
              </Badge>
              <Badge
                size="lg"
                leftSection={<IconBrandCss3 size={20} />}
                color="gray"
                radius="sm"
              >
                CSS3
              </Badge>
              <Badge
                size="lg"
                leftSection={<IconBrandJavascript size={20} />}
                color="gray"
                radius="sm"
              >
                JavaScript
              </Badge>
              <Badge
                size="lg"
                leftSection={<IconBrandReact size={20} />}
                color="gray"
                radius="sm"
              >
                React
              </Badge>
              <Badge
                size="lg"
                leftSection={<IconBrandNodejs size={20} />}
                color="gray"
                radius="sm"
              >
                Node.js
              </Badge>
              <Badge
                size="lg"
                leftSection={<IconBrandGit size={20} />}
                color="gray"
                radius="sm"
              >
                Git
              </Badge>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
