import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Navbar />
      <Router />
      <Footer />
    </MantineProvider>
  );
}
