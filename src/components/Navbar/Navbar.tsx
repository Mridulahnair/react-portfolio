import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Image } from '@mantine/core';
import classes from './Navbar.module.css';

const links = [
  { link: '/about', label: 'About' },
  { link: '/work', label: 'Work' },
  { link: '/gallery', label: 'Gallery' },
  { link: '/blog', label: 'Blog' },
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
        <a href="/">
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