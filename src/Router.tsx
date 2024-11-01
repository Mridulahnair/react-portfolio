import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutPage } from './pages/About.page';
import { BlogPage } from './pages/Blog.page';
import { GalleryPage } from './pages/Gallery.page';
import { HomePage } from './pages/Home.page';
import { WorkPage } from './pages/Work.page';

const router = createBrowserRouter([
  {
    path: '/react-portfolio',
    element: <HomePage />,
  },
  {
    path: '/react-portfolio/about',
    element: <AboutPage />,
  },
  {
    path: '/react-portfolio/work',
    element: <WorkPage />,
  },
  {
    path: '/react-portfolio/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/react-portfolio/blog',
    element: <BlogPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
