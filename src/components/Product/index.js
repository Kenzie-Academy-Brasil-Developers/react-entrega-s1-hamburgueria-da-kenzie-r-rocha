import "./style.css";

const Product = ({ id, name, category, price, image, setFilteredProducts, handleClickId }) => {
  console.log(image);

  return id !== undefined ? (
    <div className="card products">
      <p className="name">{name}</p>
      <p className="category">Categoria: {category}</p>
      <p className="price">Preço: $ {price}</p>
      <div>
        <img className="photo" src={image} alt={name} />
      </div>
      <button className="btn-grad"
        onClick={() => {
          handleClickId(id);
          setFilteredProducts("");
        }}
      >
        ADICIONAR
      </button>
    </div>
  ) : (
    <div className="chart">
      <p className="name">{name}</p>
      <p className="category">Categoria: {category}</p>
      <p className="price">Preço: $ {price}</p>
    </div>
  );
};

export default Product;
