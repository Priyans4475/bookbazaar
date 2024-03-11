import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import Home from '../components/home/Home';
import Shop from '../components/shop/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import Singlebook from '../components/Singlebook';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
  
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/shop",
            element: <Shop />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/blog",
            element: <Blog />,
          },
          {
            path: "singlebook",
            element: <Singlebook />,
          },

      ],
    },
  ]);
  export default router;