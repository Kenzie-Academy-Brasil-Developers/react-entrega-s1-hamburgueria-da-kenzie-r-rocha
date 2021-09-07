import "./style.css";
// import MenuContainer from "../MenuContainer";

const Product = ({ id, name, category, price, handleClickId }) => {
  return id !== undefined ? (
    <div className="Card Products">
      <p className="Name">{name}</p>
      <p className="Category">Categoria: {category}</p>
      <p className="Price">Preço: $ {price}</p>
      <button
        onClick={() => {
          handleClickId(id);
        }}
      >
        ADICIONAR
      </button>
    </div>
  ) : (
    <div className="Card">
      <p className="Name">{name}</p>
      <p className="Category">Categoria: {category}</p>
      <p className="Price">Preço: $ {price}</p>
    </div>
  );
};

export default Product;
