import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import ProductPage from "./Pages/ProductPage";
import ResultsPage from "./Pages/ResultsPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import UserPageLayout from "./Pages/UserPageLayout";
import CartTab from "./components/Profile/CartTab/CartTab";
import ProfileTab from "./components/Profile/ProfileTab/ProfileTab";
import LoggedInPrivateRoute from "./Pages/LoggedInPrivateRoute";
import LoggedoutPrivateRoute from "./Pages/LoggedoutPrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "",
          element: <LoggedoutPrivateRoute />,
          children: [
            {
              path: "",
              element: <UserPageLayout />,
              children: [
                { path: "/profile", element: <ProfileTab /> },
                { path: "/cart", element: <CartTab /> },
              ],
            },
          ],
        },
        {
          path: "",
          element: <LoggedInPrivateRoute />,
          children: [
            { path: "/login", element: <LoginPage /> },
            { path: "/signup", element: <SignUpPage /> },
          ],
        },
        { path: "/products/category/:catId", element: <ResultsPage /> },
        { path: "/products/:productId", element: <ProductPage /> },
        { path: "/Search/:searchText", element: <ResultsPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
