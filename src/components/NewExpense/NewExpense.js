import { useState } from "react";
import "./NewExpense.css";
import NewForm from "./NewForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveData = (expense) => {
    //passing data to parent component (App component)
    props.onAddExpense(expense);
    setIsEditing(false);
  };

  const startEditingHandler = (e) => {
    setIsEditing(true);
  };

  const stopEditingHandler = (e) => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing && <NewForm onSaveData={onSaveData} onCancel={stopEditingHandler}/>}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
