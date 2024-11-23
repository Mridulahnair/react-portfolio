import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AboutPage } from './pages/About.page';
import { BlogPage } from './pages/Blog.page';
import { GalleryPage } from './pages/Gallery.page';
import { HomePage } from './pages/Home.page';
import { WorkPage } from './pages/Work.page';
import { ContactPage } from './pages/Contact.page';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/work',
    element: <WorkPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/blog/:slug',
    element: <BlogPage />,
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
