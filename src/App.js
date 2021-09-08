import { useState } from "react";
import "./App.css";
import "./style/style.css";
import Sales from "./components/Sales/index";
import MenuContainer from "./components/MenuContainer";
import TotalCar from "./components/CarTotal";
import Filter from "./components/Filter";
import Logo from "./images/logo.png";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);
  const [currentSale, setCurrentSale] = useState([]);

  const [filteredProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);
  // const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (a) => {
    const filterProduct = products.filter((el) =>
      el.name.toLowerCase().includes(a.toLowerCase())
    );
    a !== "" && setProducts([...filterProduct]);
    if (filterProduct.length < 1) {
      setProducts([...filteredProducts]);
    }
  };

  const handleClick = (productId) => {
    const selectItem = products.find((element) => element.id === productId);
    if (!currentSale.some((sale) => sale.id === selectItem.id)) {
      setCurrentSale([...currentSale, selectItem]);
    }
  };

  const reset = (setFilterInput) => {
    setProducts(filteredProducts);
    setFilterInput("");
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Minha Figura" />
        </div>
      </header>
      <main className="main">
        <div>
          <Filter showProducts={showProducts} reset={reset} />
        </div>
        <div className="menuProduct">
          <MenuContainer products={products} handleClick={handleClick} />
        </div>
      </main>
      <aside className="aside">
        <h2>
          total Price: <TotalCar currentSale={currentSale} />
        </h2>
        <div className="menuSale">
          <Sales currentSale={currentSale} />
        </div>
      </aside>
    </div>
  );
}

export default App;
