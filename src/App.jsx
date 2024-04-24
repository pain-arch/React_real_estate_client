import HomePage from "./routes/homePage/homePage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";
import ProfilePage from "./routes/profilePage/profilePage";
import SinglePage from "./routes/singlePage/singlePage";
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
      { path: "/profile", element: <ProfilePage />}
    ],
  },
]);


function App() {
  return (
    
    <RouterProvider router={router}/>
  );
}

export default App;
