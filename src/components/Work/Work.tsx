import { useState } from 'react';
import { AspectRatio, Card, Container, Image, Modal, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './Work.module.css';

// Define the ArticleProps interface for type safety
interface ArticleProps {
  title: string;
  image: string;
  date: string;
  href: string;
}

const mockdata: ArticleProps[] = [
  {
    title: "Photography Portfolio: Capturing the Beauty of Nature",
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 18, 2022',
    href: "/react-portfolio/#blog/article1",
  },
  {
    title: "Video Editing: Bringing Stories to Life",
    image:
      'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2017/12/20170509_Eng_Library_DJA_012_3.jpg?itok=-WaXTWX8',
    date: 'August 27, 2022',
    href: "/react-portfolio/#blog/article2",
  }
];

export function Work() {
  // Use ArticleProps | null to handle the case when no article is selected
  const cards = mockdata.map((article: ArticleProps) => (
    <Card
      key={article.title}
      p="lg"
      radius="lg"
      className={classes.card}
      // onClick={() => openModal(article)}
      component="a"
      href={article.href}
      style={{ cursor: 'pointer', width:'100%', alignContent:'center' }}
        >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} alt={article.title} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid style={{alignContent:'center'}} cols={{ base: 1, sm: 1 }}>{cards}</SimpleGrid>
    </Container>
  );
}
