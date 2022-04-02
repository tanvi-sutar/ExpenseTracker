import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2019");
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    const yearChangeHandler = (newYear) => {
        setFilteredYear(newYear);
    }
    
    return (
        <Card className="expenses">
            <ExpensesFilter 
                defaultYear={filteredYear} 
                onYearChange={yearChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;