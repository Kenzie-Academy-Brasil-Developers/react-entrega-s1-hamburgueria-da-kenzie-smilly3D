const Product = ({ product: { id, name, category, price }, handleClick }) => {
  return (
    <div className="cardMenu">
      <h3>{name}</h3>
      <div>{category}</div>
      <div>{price}</div>

      <button onClick={() => handleClick(id)}>Adicionar</button>
    </div>
  );
};

export default Product;
