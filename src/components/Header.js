import React from "react";
// import headering from ''
import { ProductConsumer } from "../context/Context";

export default function Header() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <section className="header">
            <img src="" alt="header" />
            <div className="inside-container">
              <div className="texts">
                <h1>Hello</h1>
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
