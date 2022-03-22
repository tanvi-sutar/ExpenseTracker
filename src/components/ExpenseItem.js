import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    return (
        <div>
            {
                props.expenses.map((expense, i) => { 
                    const month = expense.date.toLocaleString("en-IN", {"month": "long"});
                    const day = expense.date.toLocaleString("en-IN", {"day": "2-digit"});
                    const year = expense.date.getFullYear();
                     return <div className="expense-item">
                        <div>
                            <div>{month}</div>
                            <div>{day}</div>
                            <div>{year}</div>
                        </div>
                        <div className="expense-item__description">
                            <h2>{expense.title}</h2>
                        </div>
                        <div className="expense-item__price">{expense.amount}</div>
                    </div>
                })
            }
        </div>
    )
}

export default ExpenseItem