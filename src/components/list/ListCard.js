import React from "react";
import { productList } from "./productList";
import "./listCard.css";

function ListCard() {
  return (
    <div>
      {productList.map((prod) => {
        return (
          <div className="cardStyle">
            <div class="card">
              <img
                class="card-img-top"
                src={prod.image}
                alt="Card image cap"
                width="100"
                height="300"
              />
              <div class="card-body">
                <h5 class="card-title">Price:₹{prod.price}</h5>

                <p class="card-text">{prod.title}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">{prod.description}</small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ListCard;
