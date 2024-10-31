import { Container,Text , Group, ActionIcon, rem, useMantineColorScheme, Switch } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconSun, IconMoon } from '@tabler/icons-react';
import classes from './Footer.module.css';


export function Footer() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text c="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => toggleColorScheme()}>
            {colorScheme === 'dark' ? (
              <IconSun style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            ) : (
              <IconMoon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            )}
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}