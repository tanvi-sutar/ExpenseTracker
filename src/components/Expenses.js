import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

const Expenses = (props) => {
    return (
        <div className="expenses">
            { props.expenses.map((expense, i) => <ExpenseItem expense={expense} />) }
        </div>
    )
}

export default Expenses;