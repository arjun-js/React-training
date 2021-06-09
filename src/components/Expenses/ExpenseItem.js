import {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props){
    const [item, setItem] = useState(props.item);

    const clickHandler = () =>{ 
        setItem('Updated value');
    }
    
    return (
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{item}</h2>
                <div className="expense-item__price">
                    {props.amount}
        </div>
        <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;

