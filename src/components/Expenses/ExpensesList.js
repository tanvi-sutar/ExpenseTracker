import React from "react";
import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if(props.filteredExpenses.length === 0){
        return <div className="expenses-list__fallback">No expenses found</div>
    }
    return <ul className="expenses-list">
        { props.filteredExpenses.map(filteredExpense => <ExpenseItem expense={filteredExpense}/>) }
    </ul>
}

export default ExpensesList;