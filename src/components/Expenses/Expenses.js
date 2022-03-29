import React from "react";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2019");
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() == filteredYear);

    const yearChangeHandler = (newYear) => {
        setFilteredYear(newYear);
        console.log("In Expenses: "+ newYear + " " + filteredYear);
    }

    let expenseContent = <p>No expense found.</p>;
    if(filteredExpenses.length > 0){
        expenseContent = filteredExpenses.map( filteredExpense => 
            <ExpenseItem key={filteredExpense.id} expense={filteredExpense} />
        );
    }
    
    return (
        <Card className="expenses">
            <ExpensesFilter 
                defaultYear={filteredYear} 
                onYearChange={yearChangeHandler} />
            {expenseContent}
        </Card>
    )
}

export default Expenses;