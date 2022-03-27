import React from "react";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2019");

    const yearChangeHandler = (newYear) => {
        setFilteredYear(newYear);
        console.log("In Expenses: "+ newYear + " " + filteredYear);
    }
    
    return (
        <Card className="expenses">
            <ExpensesFilter defaultYear={filteredYear} onYearChange={yearChangeHandler} />
            { props.expenses.map((expense, i) => <ExpenseItem expense={expense} />) }
        </Card>
    )
}

export default Expenses;