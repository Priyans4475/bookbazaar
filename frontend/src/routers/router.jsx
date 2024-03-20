import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import Home from '../components/home/Home';
import Shop from '../components/shop/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import Singlebook from '../components/Singlebook';
import Dashboardlayout from '../components/dashboard/Dashboardlayout';
import Dashboard from '../components/dashboard/Dashboard';
import Upload from '../components/dashboard/Upload';
import Manage from '../components/dashboard/Manage';
import EditBooks from '../components/dashboard/EditBooks';

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
    {
      path: "/admin/dashboard",
      element: <Dashboardlayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard/>,
        },
        {
          path: "/admin/dashboard/upload",
          element: <Upload/>,
        },
        {
          path: "/admin/dashboard/manage",
          element: <Manage/>,
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBooks/>,
          loader:({params})=> fetch(`http://localhost:3000/api/books/${params.id}`)
        }
      ]
    },
  ]);
  export default router;