import Product from "../Product";

const MenuContainer = ({ products, handleClick }) => {
  const listProducts = products.map((item, index) => (
    <Product key={index} product={item} handleClick={handleClick} />
  ));
  return listProducts;
};
export default MenuContainer;
