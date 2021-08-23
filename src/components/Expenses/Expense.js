import React ,{ useState }from "react"; 
import Card from "../UI/Card";
import './Expense.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpnenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";


function Expense (props) {

    const [filteredYear, setYear] = useState('2020');

    const filteredExpenses = props.expense.filter( expense => ( expense.date.getFullYear() == filteredYear ) );

    const filterChangeHandler = (filteredYear) => {
        setYear(filteredYear);
    }
 
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter filterYear={filteredYear} onFilterChange={filterChangeHandler} /> 
                <ExpensesChart expenses={filteredExpenses} />
                <ExpnenseList items={filteredExpenses} />
            </Card> 
        </div>
        
    );
}

export default Expense;