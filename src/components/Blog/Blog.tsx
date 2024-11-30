import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
} from "@mantine/core";
import {
  IconThumbUp,
  IconHeart,
  IconThumbDown,
  IconBulb,
  IconHandStop,
} from "@tabler/icons-react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import classes from "./Blog.module.css";
import article1 from "../../assets/markdowns/article1.md";
import article2 from "../../assets/markdowns/article2.md";

// Mock data for markdown files
const blogs: { [key: string]: string } = {
  article1,
  article2,
};

// Fetch markdown helper
const fetchMarkdown = async (path: string): Promise<string> => {
  const response = await fetch(blogs[path]);
  const text = await response.text();
  return text;
};

// Redux State Types
interface Comment {
  name: string;
  message: string;
  time: string;
}

interface BlogState {
  reactions: { [key: string]: number };
  comments: Comment[];
}

// Initial Redux State
const initialState: BlogState = {
  reactions: {
    like: 0,
    heart: 0,
    dislike: 0,
    bulb: 0,
    clap: 0,
  },
  comments: [],
};

// Redux Reducer
const blogReducer = (state = initialState, action: any): BlogState => {
  switch (action.type) {
    case "ADD_REACTION":
      return {
        ...state,
        reactions: {
          ...state.reactions,
          [action.payload]: state.reactions[action.payload] + 1,
        },
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return state;
  }
};

// Redux Store
const store = createStore(blogReducer);

// Blog Component
const Blog = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");

  const reactions = useSelector((state: BlogState) => state.reactions);
  const comments = useSelector((state: BlogState) => state.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadMarkdown = async () => {
      const markdown = await fetchMarkdown(`${slug}`);
      setContent(markdown);
    };

    loadMarkdown();
  }, [slug]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const commentName = newName.trim() || "Anonymous";
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      dispatch({
        type: "ADD_COMMENT",
        payload: { name: commentName, message: newComment, time: timestamp },
      });
      setNewComment("");
      setNewName("");
    }
  };

  const handleReaction = (type: string) => {
    dispatch({ type: "ADD_REACTION", payload: type });
  };

  return (
    <Container size="md" className={classes.container}>
      {/* Article Content */}
      <div style={{ marginTop: "25px" }}>
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
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Group mt="sm">
          {["like", "heart", "dislike", "bulb", "clap"].map((reaction) => (
            <React.Fragment key={reaction}>
              <Tooltip label={reaction} position="top" withArrow>
                <ActionIcon size="lg" onClick={() => handleReaction(reaction)}>
                  {reaction === "like" && <IconThumbUp size={24} />}
                  {reaction === "heart" && <IconHeart size={24} />}
                  {reaction === "dislike" && <IconThumbDown size={24} />}
                  {reaction === "bulb" && <IconBulb size={24} />}
                  {reaction === "clap" && <IconHandStop size={24} />}
                </ActionIcon>
              </Tooltip>
              <Text fz="sm">{reactions[reaction]}</Text>
            </React.Fragment>
          ))}
        </Group>
      </div>

      {/* Comments Section */}
      <div style={{ width: "100%" }}>
        <Text fw={500} fz="lg">
          Comments
        </Text>
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

// Wrap the Blog component with Redux Provider
export default () => (
  <Provider store={store}>
    <Blog />
  </Provider>
);
