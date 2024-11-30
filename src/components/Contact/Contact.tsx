import {
  Button,
  Container,
  Grid,
  Group,
  Textarea,
  TextInput,
  Title,
  Stack,
  Text,
  Box,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './Contact.module.css';

export function Contact() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Container size="lg" className={classes.container}>
      {/* Title */}
      <div className={`${classes.fadeIn} ${classes.titleWrapper}`}>
        <Title
          order={2}
          size="h1"
          className={classes.title}
        >
          Get in touch
        </Title>
      </div>

      {/* Grid Layout */}
      <Grid gutter="lg">
        {/* Left Column: Contact Info Box */}
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <div className={`${classes.fadeIn} ${classes.leftBox}`}>
            <Box className={classes.infoBox}>
              <Stack spacing="md">
                <Title order={3} size="h2" className={classes.subTitle}>
                  Contact Information
                </Title>
                <Text>
                  <strong>Name:</strong> Jake Doe
                </Text>
                <Text>
                  <strong>Email:</strong> jake.doe@example.com
                </Text>
                <Text>
                  <strong>Phone:</strong> +123 456 7890
                </Text>
                <Text>
                  <strong>Location:</strong> Dublin, Ireland
                </Text>
                <Text>
                  Feel free to reach out for collaborations, questions, or
                  opportunities!
                </Text>
              </Stack>
            </Box>
          </div>
        </Grid.Col>

        {/* Right Column: Contact Form */}
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <div className={`${classes.fadeIn} ${classes.formWrapper}`}>
            <form onSubmit={form.onSubmit(() => {})}>
              <TextInput
                label="Name"
                placeholder="Your name"
                name="name"
                variant="filled"
                {...form.getInputProps('name')}
                className={classes.input}
              />
              <TextInput
                label="Email"
                placeholder="Your email"
                name="email"
                variant="filled"
                {...form.getInputProps('email')}
                className={classes.input}
              />
              <TextInput
                label="Subject"
                placeholder="Subject"
                name="subject"
                variant="filled"
                {...form.getInputProps('subject')}
                className={classes.input}
              />
              <Textarea
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                name="message"
                variant="filled"
                {...form.getInputProps('message')}
                className={classes.input}
              />
              <Group justify="center" mt="lg">
                <Button type="submit" size="md" className={classes.button}>
                  Send message
                </Button>
              </Group>
            </form>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
