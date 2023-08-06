import "./App.css";
import "./variables.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home";
import ErrorRoute from "./components/ErrorRoute";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      errorElement: <ErrorRoute />,
      children: [
        { index: true, element: <Home /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <ContactMe /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
