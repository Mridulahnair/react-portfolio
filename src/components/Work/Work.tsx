import { useState } from 'react';
import { AspectRatio, Card, Container, Image, Modal, SimpleGrid, Text, Title } from '@mantine/core';
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
    title: "TravelBuddy: Streamlined Trip Planning Interface",
    image:
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    date: 'August 18, 2022',
    content:
      'TravelBuddy is an intuitive app designed to simplify the trip planning process for travelers. It features an easy-to-use interface that allows users to search for destinations, create itineraries, and book accommodations all in one place. With personalized recommendations and collaborative tools, users can share plans with friends and family, enhancing the travel experience. This project aims to make trip planning enjoyable and efficient, ensuring users can focus on creating lasting memories.',
  },
  {
    title: "BookShelf: Simplifying Library Management Systems",
    image:
      'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2017/12/20170509_Eng_Library_DJA_012_3.jpg?itok=-WaXTWX8',
    date: 'August 27, 2022',
    content:
      'BookShelf is a user-friendly platform designed to enhance library management for both patrons and librarians. It features intuitive search functionality, user profiles for tracking borrowing history, and efficient inventory management tools. With a responsive design, it ensures accessibility across devices, promoting community engagement through book reviews and recommendations. This project streamlines library operations, making it easier for users to discover and manage resources.',
  },
  {
    title: "RecipeMaster: User-Friendly Cooking App",
    image:
      'https://cdn.dribbble.com/userupload/16047322/file/original-e56ae8253ef41505debc65cbe9d549a3.png?resize=752x',
    date: 'September 9, 2022',
    content:
      'RecipeMaster is a cooking app designed to make meal preparation enjoyable and accessible for everyone. It features a simple interface that allows users to browse a wide range of recipes, customize meal plans, and generate shopping lists with ease. Users can also save their favorite recipes and share cooking tips with a community of food enthusiasts. This project aims to inspire home cooks by providing a seamless and engaging cooking experience, transforming the way users interact with their culinary adventures.',
  },
  {
    title: "EduConnect: Enhancing Student Engagement in Learning Platforms",
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMujyFEIU3X5sjwYDZryQIvJbfZi_grD-0LA&s',
    date: 'September 12, 2022',
    content:
      'EduConnect is a dynamic learning platform designed to foster student engagement through interactive features and collaborative tools. It includes discussion forums, live Q&A sessions, and gamified learning activities that encourage participation and enhance the learning experience. With personalized content recommendations and progress tracking, students can take ownership of their education. This project aims to create a vibrant online learning community, making education more engaging and accessible for all learners..',
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

      <Modal opened={opened} onClose={() => setOpened(false)} size="lg">
        {selectedArticle && (
          <>
            <AspectRatio ratio={1920 / 1080} mb="md">
              <Image src={selectedArticle.image} alt={selectedArticle.title} />
            </AspectRatio>
            <Title order={2} style={{ marginBottom: '1rem', fontWeight: 700, fontSize: '1.5rem' }}>
              {selectedArticle?.title}
            </Title>
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
