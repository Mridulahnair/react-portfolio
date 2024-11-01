import { useState } from 'react';
import { Burger, Container, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';

const links = [
  { link: '/react-portfolio/about', label: 'About' },
  { link: '/react-portfolio/work', label: 'Work' },
  { link: '/react-portfolio/gallery', label: 'Gallery' },
  { link: '/react-portfolio/blog', label: 'Blog' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      // data-active={active === link.link || undefined}
      // onClick={(event) => {
      //   event.preventDefault();
      //   setActive(link.link);
      // }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <a href="/react-portfolio">
          <Image
            radius="md"
            h={45}
            w="auto"
            fit="contain"
            src="https://upload.wikimedia.org/wikipedia/en/7/76/UL_new_logo_1.png"
          />
        </a>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
