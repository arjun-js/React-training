import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });

    const titleChangeHandler = (event)=>{
       
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // });
    }

    const amountChangeHandler = (event)=>{
      
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event)=>{
       
        setDate(event.target.value);
    }

    const formSubmitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title : title,
            amount: amount, 
            date : new Date(date)
        };
       
        props.onSaveDataHandler(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

 return (
     <form onSubmit={formSubmitHandler}>
     <div className="new-expense__controls">
     <div className="new-expense__control">
     <label>Title</label>
     <input type="text" value={title} onChange={titleChangeHandler}/>
     </div>
     <div className="new-expense__control">
         <label>Amount</label>
         <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} ></input>
     </div>
     <div className="new-expense__control">
         <label>Date</label>
         <input type="date" value={date} min="2019-01-01" max="2030-12-31" onChange={dateChangeHandler}></input>
     </div>
     </div>
     <div className="new-expense__actions">
<button type="submit">Submit</button>
     </div>
     </form>
 )

};

export default ExpenseForm;