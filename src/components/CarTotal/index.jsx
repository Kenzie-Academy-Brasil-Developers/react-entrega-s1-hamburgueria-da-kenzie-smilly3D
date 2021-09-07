const TotalCar = ({ currentSale }) => {
  return currentSale
    .reduce((acc, valorAtual) => acc + valorAtual.price, 0)
    .toFixed(2);
};
export default TotalCar;
