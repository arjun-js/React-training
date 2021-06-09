import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props)=>{

    const onSaveDataHandler = (expenseData)=>{
        const modifiedExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onNewExpenseAdded(modifiedExpenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveDataHandler={onSaveDataHandler} />
        </div>)
};

export default NewExpense;
