import Layout from "./layout/Layout"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/books/create',
          element: <CreateBook />,
        },
        {
          path: '/books/details/:id',
          element: <ShowBook />,
        },
        {
          path: '/books/edit/:id',
          element: <EditBook />,
        },
        {
          path: '/books/delete/:id',
          element: <DeleteBook />,
        },
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
