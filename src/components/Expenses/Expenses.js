import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {

    const yearChangeHandler = (newYear) => {
        console.log("In expenses " + newYear);
    }
    
    return (
        <Card className="expenses">
            <ExpensesFilter onYearChange={yearChangeHandler} />
            { props.expenses.map((expense, i) => <ExpenseItem expense={expense} />) }
        </Card>
    )
}

export default Expenses;