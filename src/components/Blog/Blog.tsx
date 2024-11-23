import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import { IconAt, IconPhoneCall } from '@tabler/icons-react';
import { Avatar, Container, Group, Text } from '@mantine/core';
import classes from './Blog.module.css';

// Add new articles here
import article1 from '../../assets/markdowns/article1.md';
import article2 from '../../assets/markdowns/article2.md';
const blogs: { [key: string]: string } = {
    article1,
    article2,
}

const fetchMarkdown = async (path: string): Promise<string> => {
    console.log(blogs)
    console.log(path)
    const response = await fetch(blogs[path]);
    const text = await response.text();
    return text;
};

const Blog = () => {
    console.log('MarkdownPage');
    const { slug } = useParams<{ slug: string }>();
    const [content, setContent] = useState('');

    useEffect(() => {
        const loadMarkdown = async () => {
            const markdown = await fetchMarkdown(`${slug}`);
            setContent(markdown);
        };

        loadMarkdown();
    }, [slug]);

    return (
        <Container size="md" className={classes.container}>
            <div style={{ marginTop: '25px' }}>
                <Group wrap="nowrap">
                    <Avatar
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                    size={94}
                    radius="md"
                    />
                    <div>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                        UI/UX Student
                    </Text>

                    <Text fz="lg" fw={500} className={classes.name}>
                        Mridula Haridasan
                    </Text>

                    <Group wrap="nowrap" gap={10} mt={3}>
                        <IconAt stroke={1.5} size={16} className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                        hmridula26@gmail.com
                        </Text>
                    </Group>
                    </div>
                </Group>
                </div>
            {/* <ReactMarkdown rehypePlugins={[rehypeRaw]} >{content}</ReactMarkdown> */}
            <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} />
        </Container>
    );
};

export default Blog;