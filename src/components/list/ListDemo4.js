import React from "react";
import ListCard from "./ListCard";
import { productList } from "./productList";

function ListDemo4() {
  console.log(productList);
  return (
    <div>
      ListDemo4
      <ListCard />
    </div>
  );
}
export default ListDemo4;
