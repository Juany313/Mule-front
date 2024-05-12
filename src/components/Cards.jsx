import Card from './Card';

const Cards = ({ OrdersList }) => {
  return (
    
     <div > 
      {OrdersList.map((order) => (
        <Card
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
};
  
export default Cards;