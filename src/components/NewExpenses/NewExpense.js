import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (newExpense) => {
        const expense = {
            ...newExpense,
            id:Math.random().toString()
        }
        console.log(expense);
        props.onAddExpense(expense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;
