import Header from "./components/header-componet/Header";
import Product from "./components/product-components/Product";
import AllProduct from "./components/all-product-component/AllProduct";
import Footer from "./components/footer-component/Footer";
import './App.css'
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Product />
      <AllProduct />
      <Footer />
    </div>
  );
}

export default App;
