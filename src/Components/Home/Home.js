import React from "react";
import { useState } from "react";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import FakeData from "../FakeData/FakeData";
import Place from "../Place/Place";

const Home = () => {
  const [items, setItems] = useState(FakeData);

  const handleBook = (item) => {
    //console.log('booking',item);
    addToDatabaseCart(item.id, 1);
  };

  return (
    <>
      <h1 style={{ marginTop: "35px", color: "red" }}>
        Bestselling Homestays:
      </h1>{" "}
      <hr />
      {items.map((item) => (
        <Place key={item.id} item={item} handleBook={handleBook}>
          {" "}
        </Place>
      ))}
    </>
  );
};

export default Home;
