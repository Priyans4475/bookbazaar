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
import Register from '../admin/register';
import Books from '../admin/Books';
import Users from '../admin/Users';
import Authorbooks from '../components/Authorbooks';
import Login from '../components/dashboard/Login';

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
            path: "/authorsbooks",
            element: <Authorbooks />,
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
        },
        {
          path:'/admin/dashboard/register',
          element: <Register />
        },
        {
           path:'/admin/dashboard/register/signin', 
           element: <Login />
        },
        {
          path:'/admin/dashboard/userdetails',
          element: <Users/>
        },
        {
          path:'/admin/dashboard/books',
          element: <Books/>
        }
      ]
    },
  ]);
  export default router;