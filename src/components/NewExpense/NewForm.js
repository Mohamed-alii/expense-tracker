import './NewForm.css';
import {useState} from 'react';

const NewForm = (props) => {

    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })


    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount: +enteredAmount,
            date:new Date(enteredDate),
            id:Math.floor( (Math.random() * 10) )
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');


        props.onSaveData(expenseData)
    }
 
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <lable>
                        Title
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    </lable>
                </div>
                <div className='new-expense__control'>
                    <lable>
                        Amount
                        <input type='number' value={enteredAmount} min='0.1' step='0.01' onChange={amountChangeHandler} />
                    </lable>
                </div>
                <div className='new-expense__control'>
                    <lable>
                        Date
                        <input type='date' value={enteredDate} min='2019-01-01' max='2021-12-31' onChange={dateChangeHandler} />    
                    </lable>
                </div>

            </div>

            <div className='new-expense__actions'>
                <button onClick={props.onCanel} >Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    );
}

export default NewForm;