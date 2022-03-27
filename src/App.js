import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {

  let expenses = [
    {"date": new Date(2022, 0, 12), "title" : "Car Insurance", "amount" : 233.3},
    {"date": new Date(2022, 0, 15), "title" : "Car Insurance", "amount" : 233.3},
    {"date": new Date(2022, 1, 24), "title" : "Car Insurance", "amount" : 233.3},
    {"date": new Date(2022, 2, 8), "title" : "Car Insurance", "amount" : 233.3},
  ]

  const onAddExpenseHandler = (newExpense) => {
    expenses.concat(newExpense)
    console.log("In app.js\n"+newExpense);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={onAddExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
