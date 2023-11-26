import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "src/assets/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "  Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "src/assets/margherita.jpg",
    soldOut: false,
  },
  {
    name: "  Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "src/assets/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "  Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "src/assets/funghi.jpg",
    soldOut: false,
  },
  {
    name: " Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "src/assets/salamino.jpg",
    soldOut: true,
  },
  {
    name: "  Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "src/assets/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const text = {};
  return (
    <header className="header">
      <h1 style={text}>Fast Pizza Co.in</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu</h2>
      <p>
        Authentic italian cuisine, 6 create dishes to choose from, All from our'
        stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizz={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizz }) {
  console.log(pizz);
  return (
    <li className={`pizza ${pizz.soldOut ? "sold-out" : " "}`}>
      <img src={pizz.photoName} alt={pizz.name} />
      <div>
        <h3>{pizz.name}</h3>
        <p>{pizz.ingredients}</p>
        <span>{pizz.soldOut ? "SOLD OUT " : pizz.price + 3} </span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  let Message = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {Message ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to welsome you between {openHour}: 00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are Open untill {closeHour}:00. Come visit us on {openHour}:00 or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
