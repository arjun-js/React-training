import './App.css';
import Expenses from './components/Expenses';


function App() {
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
  return (
    <div className="App">
      <h1>React Practice</h1>
      <Expenses expenses = {expenses}></Expenses>
    </div>
  );
}

export default App;
