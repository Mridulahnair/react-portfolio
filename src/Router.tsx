import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import { AboutPage } from './pages/About.page';
import { BlogPage } from './pages/Blog.page';
import { GalleryPage } from './pages/Gallery.page';
import { HomePage } from './pages/Home.page';
import { WorkPage } from './pages/Work.page';

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
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
