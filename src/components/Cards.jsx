import React from "react";
import Card from "./Card";

const Cards = ({ OrdersList }) => {
  // Verifica si OrdersList es un arreglo antes de usar map
  if (!Array.isArray(OrdersList)) {
    console.error('OrdersList debe ser un arreglo', OrdersList);
    return <div>No hay pedidos para mostrar</div>;
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {OrdersList.map(order => (
            <Card key={order.id} order={order} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
