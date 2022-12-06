import { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {
  const [isEditing, setisEditing] = useState(false);
  const expenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString,
    };
    props.onSubmitExpenseHandler(expenseData);
    setisEditing(false);
  };
  const onclickHandler = () => {
    setisEditing(true);
  };
  const oncloseHandler = () => {
    setisEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={onclickHandler} type="button">
          ADD EXPENSE
        </button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSubmitExpenseFormHandler={expenseHandler}
          onclose={oncloseHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
