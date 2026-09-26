import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductList />
    </>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;