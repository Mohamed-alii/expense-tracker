import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const INTIAL_EXPENSE = [
  {title:'car' , date:new Date(2020 , 1 , 28) , amount:416 , id:1},
  {title:'wallet' , date:new Date(2020 , 5 , 2) , amount:123 , id:3},
  {title:'smoking' , date:new Date(2019 , 10 , 13) , amount:743 , id:5},
  {title:'travel' , date:new Date(2020 , 9 , 20) , amount:2000 , id:2}
]


function App() {

  const [expense , setExpense] = useState(INTIAL_EXPENSE);
  
  const addExepnseHandler = (expense) => {
    setExpense( prevState => [ expense , ...prevState ] );
  }

  const yearFilter = (year) => {
    console.log( 'from app component' ,year)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExepnseHandler} />
      <Expense expense={expense} filteredYear={yearFilter} />
    </div>
  );
}

export default App;
