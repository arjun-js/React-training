import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props){
    const {expenses} = props;

    const onSelectHandler = (value)=>{
        console.log(value);
    }

    return (
        <Card className="expenses">
        <ExpensesFilter onSelectHandler={onSelectHandler} ></ExpensesFilter>
<ExpenseItem
      date={expenses[0].expenseDate}
      item={expenses[0].expenseItem}
      amount={expenses[0].expenseAmount}
      ></ExpenseItem>
      <ExpenseItem
      date={expenses[1].expenseDate}
      item={expenses[1].expenseItem}
      amount={expenses[1].expenseAmount}
      ></ExpenseItem>
      <ExpenseItem
      date={expenses[2].expenseDate}
      item={expenses[2].expenseItem}
      amount={expenses[2].expenseAmount}
      ></ExpenseItem>
      <ExpenseItem
      date={expenses[3].expenseDate}
      item={expenses[3].expenseItem}
      amount={expenses[3].expenseAmount}
      ></ExpenseItem>
        </Card>
    )
}

export default Expenses;