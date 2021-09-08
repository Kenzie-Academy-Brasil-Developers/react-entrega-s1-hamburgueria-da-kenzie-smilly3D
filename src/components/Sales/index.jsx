const Sales = ({ currentSale }) => {
  return (
    <>
      {currentSale.map((item) => (
        <div className={`cardSale`} key={item.id}>
          <div>{item.name}</div>
          <div>{item.category}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </>
  );
};

export default Sales;
