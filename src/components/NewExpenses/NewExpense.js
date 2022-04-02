import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditting, setIsEditting] = useState(false);

    const onSaveExpenseDataHandler = (newExpense) => {
        const expense = {
            ...newExpense,
            id:Math.random().toString()
        }
        props.onAddExpense(expense);
        setIsEditting(false);
    }

    const onAddExpenseHandler = () => {
        setIsEditting(true);
    }

    const onCancelHandler = () => {
        setIsEditting(false);
    }

    return (
        <div className="new-expense">
            {!isEditting && <button onClick={onAddExpenseHandler}>Add Expense</button>}
            {isEditting && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={onCancelHandler}/>}
        </div>
    )
}

export default NewExpense;
