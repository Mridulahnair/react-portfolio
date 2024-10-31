import { useState } from 'react';
import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Modal, Title } from '@mantine/core';
import classes from './Work.module.css';

// Define the ArticleProps interface for type safety
interface ArticleProps {
  title: string;
  image: string;
  date: string;
  content: string;
}

const mockdata: ArticleProps[] = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 18, 2022',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Best forests to visit in North America',
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 27, 2022',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Hawaii beaches review: better than you think',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'September 9, 2022',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'September 12, 2022',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
];

export function Work() {
  // Use ArticleProps | null to handle the case when no article is selected
  const [opened, setOpened] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ArticleProps | null>(null);

  const openModal = (article: ArticleProps) => {
    setSelectedArticle(article);
    setOpened(true);
  };

  const cards = mockdata.map((article: ArticleProps) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      className={classes.card}
      onClick={() => openModal(article)}
      style={{ cursor: 'pointer' }}
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
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="lg"
      >
        {selectedArticle && (
          <>
            <AspectRatio ratio={1920 / 1080} mb="md">
              <Image src={selectedArticle.image} alt={selectedArticle.title} />
            </AspectRatio>
            <Title order={2} style={{ marginBottom: '1rem', fontWeight: 700, fontSize: '1.5rem' }}>{selectedArticle?.title}</Title>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {selectedArticle.date}
            </Text>
            <Text size="sm" style={{ textAlign: 'left' }}>
              {selectedArticle.content}
            </Text>
          </>
        )}
      </Modal>
    </Container>
  );
}
