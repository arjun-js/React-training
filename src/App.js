import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expense/NewExpense';


const App = () => {
  const expenses = [{
    expenseDate : new Date(),
    expenseItem: 'Pizza',
    expenseAmount: 650
  },
  {
    expenseDate : new Date(),
    expenseItem: 'Another Pizza',
    expenseAmount: 650
  },
  {
    expenseDate : new Date(),
    expenseItem: 'Another Pizza, why not?',
    expenseAmount: 650
  },
  {
    expenseDate : new Date(),
    expenseItem: 'One last Pizza',
    expenseAmount: 650
  }
];

const onNewExpenseAdded = (expense)=>{
  console.log('in App.js', expense);
}

  return (
    <div className="App">
      <h1>React Practice</h1>
      <NewExpense onNewExpenseAdded={onNewExpenseAdded} ></NewExpense>
      <Expenses expenses = {expenses}></Expenses>
    </div>
  );
}

export default App;
