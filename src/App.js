import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {

  let expenses = [
    {"date": new Date(2022, 0, 12), "title" : "Car Insurance", "amount" : 233.3},
    {"date": new Date(2022, 0, 15), "title" : "Car Insurance", "amount" : 233.3},
    {"date": new Date(2022, 1, 24), "title" : "Car Insurance", "amount" : 233.3},
    {"date": new Date(2022, 2, 8), "title" : "Car Insurance", "amount" : 233.3},
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem expenses={expenses}/>
    </div>
  );
}

export default App;
