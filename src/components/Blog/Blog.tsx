import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router-dom';
import {
    Avatar,
    Container,
    Group,
    Text,
    Button,
    Textarea,
    TextInput,
    Paper,
    TypographyStylesProvider,
    ActionIcon,
    Tooltip,
} from '@mantine/core';
import {
    IconThumbUp,
    IconHeart,
    IconThumbDown,
    IconBulb,
    IconHandStop,
} from '@tabler/icons-react';
import classes from './Blog.module.css';
import article1 from '../../assets/markdowns/article1.md';
import article2 from '../../assets/markdowns/article2.md';

const blogs: { [key: string]: string } = {
    article1,
    article2,
};

const fetchMarkdown = async (path: string): Promise<string> => {
    const response = await fetch(blogs[path]);
    const text = await response.text();
    return text;
};

interface Comment {
    name: string;
    message: string;
    time: string;
}

const Blog = () => {
    const { slug } = useParams<{ slug: string }>();
    const [content, setContent] = useState('');
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [newName, setNewName] = useState('');

    // Reactions State
    const [reactions, setReactions] = useState({
        like: 0,
        heart: 0,
        dislike: 0,
        bulb: 0,
        clap: 0,
    });

    useEffect(() => {
        const loadMarkdown = async () => {
            const markdown = await fetchMarkdown(`${slug}`);
            setContent(markdown);
        };

        loadMarkdown();
    }, [slug]);

    const handleAddComment = () => {
        if (newComment.trim()) {
            const commentName = newName.trim() || 'Anonymous';
            const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setComments((prevComments) => [
                ...prevComments,
                { name: commentName, message: newComment, time: timestamp },
            ]);
            setNewComment('');
            setNewName('');
        }
    };

    const handleReaction = (type: keyof typeof reactions) => {
        setReactions((prevReactions) => ({
            ...prevReactions,
            [type]: prevReactions[type] + 1,
        }));
    };

    return (
        <Container size="md" className={classes.container}>
            {/* Article Content */}
            <div style={{ marginTop: '25px' }}>
                <Group wrap="nowrap">
                    <Avatar
                        src="https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?t=st=1732546957~exp=1732550557~hmac=5d1aa8064383a6669915ebaf791d9cb593c873efa1b488c541b6a387f4a4e137&w=996"
                        size={94}
                        radius="md"
                    />
                    <div>
                        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                            Interaction & Experience Designer
                        </Text>
                        <Text fz="lg" fw={500} className={classes.name}>
                            Mridula Haridasan
                        </Text>
                    </div>
                </Group>
            </div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>

            {/* Reactions Section */}
            <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                
                <Group mt="sm">
                    <Tooltip label="Like" position="top" withArrow>
                        <ActionIcon size="lg" onClick={() => handleReaction('like')}>
                            <IconThumbUp size={24} />
                        </ActionIcon>
                    </Tooltip>
                    <Text fz="sm">{reactions.like}</Text>

                    <Tooltip label="Heart" position="top" withArrow>
                        <ActionIcon size="lg" onClick={() => handleReaction('heart')}>
                            <IconHeart size={24} />
                        </ActionIcon>
                    </Tooltip>
                    <Text fz="sm">{reactions.heart}</Text>

                    <Tooltip label="Dislike" position="top" withArrow>
                        <ActionIcon size="lg" onClick={() => handleReaction('dislike')}>
                            <IconThumbDown size={24} />
                        </ActionIcon>
                    </Tooltip>
                    <Text fz="sm">{reactions.dislike}</Text>

                    <Tooltip label="Bulb (Insight)" position="top" withArrow>
                        <ActionIcon size="lg" onClick={() => handleReaction('bulb')}>
                            <IconBulb size={24} />
                        </ActionIcon>
                    </Tooltip>
                    <Text fz="sm">{reactions.bulb}</Text>

                    <Tooltip label="Clap" position="top" withArrow>
                        <ActionIcon size="lg" onClick={() => handleReaction('clap')}>
                            <IconHandStop size={24} />
                        </ActionIcon>
                    </Tooltip>
                    <Text fz="sm">{reactions.clap}</Text>
                </Group>
            </div>

            {/* Comments Section */}
            <div style={{width:'100%'}}>
                <Text fw={500} fz="lg">
                    Comments
                </Text>
                {/* Display Existing Comments */}
                {comments.map((comment, index) => (
                    <Paper
                        withBorder
                        radius="md"
                        className={classes.comment}
                        key={index}
                        mt="sm"
                        
                    >
                        <Group>
                            <Avatar
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                alt={comment.name}
                                radius="xl"
                            />
                            <div>
                                <Text fz="sm">{comment.name}</Text>
                                <Text fz="xs" c="dimmed">
                                    {comment.time}
                                </Text>
                            </div>
                        </Group>
                        <TypographyStylesProvider className={classes.body}>
                            <div className={classes.content}>{comment.message}</div>
                        </TypographyStylesProvider>
                    </Paper>
                ))}

                {/* Add New Comment */}
                <TextInput
                    placeholder="Your name (optional)"
                    value={newName}
                    onChange={(e) => setNewName(e.currentTarget.value)}
                    mt="md"
                />
                <Textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.currentTarget.value)}
                    mt="md"
                />
                <Button onClick={handleAddComment} mt="md">
                    Submit
                </Button>
            </div>
        </Container>
    );
};

export default Blog;
