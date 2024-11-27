import Navigation from "./components/Navigation";
import Footer from "./components/footer/Footer";
import { useRoutes } from "react-router-dom";
import About from "./pages/About";
import ProductDetails from "./pages/MakeupDetails";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {

const routes = useRoutes([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <ProductDetails /> },
]);  


  return (
    <div className="app">
      <Navigation />
      <div className="content">
        {routes}
      </div>
      <Footer />
    </div>
  );
}

export default App;
