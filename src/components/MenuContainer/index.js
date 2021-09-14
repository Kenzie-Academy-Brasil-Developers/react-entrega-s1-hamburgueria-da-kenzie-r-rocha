import "./style.css";
import Product from "../Product";

const MenuContainer = ({ products, filteredProducts, setFilteredProducts, handleClickId }) => {
  return filteredProducts.length > 0 ? (
    <>
      <div className="Container">
        {filteredProducts.map((elem, index) => (
          <div key={index}>
            <Product
              id={elem.id}
              name={elem.name}
              category={elem.category}
              price={elem.price}
              image={elem.image}
              handleClickId={handleClickId}
              setFilteredProducts={setFilteredProducts}
            />
          </div>
        ))}
      </div>
      <div className="Container">
        {products.map((elem, index) => (
          <div key={index}>
            <Product
              id={elem.id}
              name={elem.name}
              category={elem.category}
              price={elem.price}
              image={elem.image}
              handleClickId={handleClickId}
            />
          </div>
        ))}
      </div>{" "}
    </>
  ) : (
    <div className="Container">
      {products.map((elem, index) => (
        <div key={index}>
          <Product
            id={elem.id}
            name={elem.name}
            category={elem.category}
            price={elem.price}
            image={elem.image}
            handleClickId={handleClickId}
          />
        </div>
      ))}
    </div>
  );
};

export default MenuContainer;
