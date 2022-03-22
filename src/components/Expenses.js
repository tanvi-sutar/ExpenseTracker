import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            { props.expenses.map((expense, i) => <ExpenseItem expense={expense} />) }
        </Card>
    )
}

export default Expenses;