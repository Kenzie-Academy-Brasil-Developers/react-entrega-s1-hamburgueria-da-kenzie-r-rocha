import "./App.css";

import hamburguer from "./images/hamburguer.png";
import xBurguer from "./images/x-burguer.png";
import xSalada from "./images/x-salada.png";
import bigKenzie from "./images/big-kenzie.png";
import guarana from "./images/guarana.png";
import coca from "./images/coca.png";
import fanta from "./images/fanta.png";

import { useState } from "react";
import MenuContainer from "./components/MenuContainer";
import Product from "./components/Product";
import Header from "./components/Header/indes";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 7.99,
      image: hamburguer,
    },
    {
      id: 2,
      name: "X-Salada",
      category: "Sanduíches",
      price: 10.99,
      image: xSalada,
    },
    {
      id: 3,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 8.99,
      image: xBurguer,
    },
    {
      id: 4,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 16.99,
      image: bigKenzie,
    },
    {
      id: 5,
      name: "Guaraná",
      category: "Bebidas",
      price: 4.99,
      image: guarana,
    },
    { id: 6, 
      name: "Coca-Cola", 
      category: "Bebidas", 
      price: 4.99, 
      image: coca 
    },
    { id: 7, 
      name: "Fanta", 
      category: "Bebidas", 
      price: 4.99, 
      image: fanta 
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  const [input, setInput] = useState("");

  function showProducts() {
    return (
      <div className="Form">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          className="btn-grad"
          onClick={() => {
            input !== ""
              ? handleClick(input)
              : alert("Digite o nome do produto");
          }}
        >
          BUSCAR PRODUTO
        </button>
      </div>
    );
  }

  const total = currentSale.reduce((acc, valorAtual) => {
    return valorAtual.price + acc;
  }, 0);

  function handleClick(productName) {
    const itemEncontrado = products.filter((item) => {
      return item.name.toLowerCase().includes(productName.toLowerCase());
    });

    itemEncontrado.length > 0
      ? setFilteredProducts([...itemEncontrado])
      : alert("Produto não encontrado");
  }

  function handleClickId(productId) {
    const idEncontrado = products.filter((item) => {
      return item.id === productId;
    });

    const duplicado = currentSale.filter((item) => {
      return item.id === productId;
    });

    if (duplicado.length === 0) {
      setCurrentSale([...currentSale, ...idEncontrado]);
    } else {
      alert("Esse produto já foi adicionado");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <div className="ShowProducts">{showProducts()}</div>

        <MenuContainer
          products={products}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
          handleClickId={handleClickId}
        />

        <div className="Title">Meus Pedidos</div>

        {total !== 0 ? (
          <div className="CartTotal">Valor Total: {total.toFixed(2)}</div>
        ) : (
          <div className="CartTotal"></div>
        )}

        <div className="Container Down">
          {currentSale.map((elem, index) => (
            <div key={index}>
              <Product
                name={elem.name}
                category={elem.category}
                price={elem.price}
                image={elem.image}
                elem={elem}
              />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
