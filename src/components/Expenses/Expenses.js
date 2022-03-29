import React from "react";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2019");
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() == filteredYear);

    const yearChangeHandler = (newYear) => {
        setFilteredYear(newYear);
        console.log("In Expenses: "+ newYear + " " + filteredYear);
    }
    
    return (
        <Card className="expenses">
            <ExpensesFilter 
                defaultYear={filteredYear} 
                onYearChange={yearChangeHandler} />
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;