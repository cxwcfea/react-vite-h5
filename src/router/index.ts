// import { createBrowserRouter } from 'react-router-dom';
import Detail from '@/container/Detail';
// import About from '@/container/About';
import Home from '@/container/Home';
import Data from '@/container/Data';
import User from '@/container/User';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     Component: Home,
//   },
//   {
//     path: '/data',
//     Component: Data,
//   },
//   {
//     path: '/user',
//     Component: User,
//   },
// ]);

const router = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/data',
    component: Data,
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/detail',
    component: Detail,
  },
];

export default router;
