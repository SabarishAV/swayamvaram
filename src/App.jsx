import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import  { ContactUs } from './pages/Contact/Contactprev';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';

const Layout = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <Register />,
      },
    ],
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
