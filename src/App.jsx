import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import Footer from "./Components/Footer/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

const Layout = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
