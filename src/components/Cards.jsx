import Card from './Card';

const Cards = ({ OrdersList }) => {
  return (
    <section className='mb-20'>
    <div className='container mx-auto'>
     {/* <div className='grid md:grid-cols-2 lg:grid-cols-2'>  */}
     <div className='flex justify-center gap-20 mb-20 mr-0 md:mr-20 lg:mr-0 pb-32'>
      {OrdersList.map((order) => (
        <Card
          key={order.id}
          order={order}
        />
      ))}
    </div>
    </div>
    </section>
  );
};
  
export default Cards;