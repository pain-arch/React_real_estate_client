import HomePage from "./routes/homePage/homePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";
import ProfilePage from "./routes/profilePage/profilePage";
import SinglePage from "./routes/singlePage/singlePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/list", element: <ListPage /> },
      { path: "/:id", element: <SinglePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/login", element: <Login /> },
      {path: "/register", element: <Register />}
    ],
  },
]);


function App() {
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
