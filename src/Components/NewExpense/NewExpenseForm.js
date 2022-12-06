import { useState } from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [Amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleHandlerChange = (event) => {
    setTitle(event.target.value);
  };
  const AmountHandlerChange = (event) => {
    setAmount(event.target.value);
  };
  const DateHandlerChange = (event) => {
    setDate(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      title: title,
      amount: +Amount,
      date: new Date(date),
    };

    props.onSubmitExpenseFormHandler(expense);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>TITLE</label>
          <input onChange={titleHandlerChange} value={title} type="text" />
        </div>
        <div className="new-expense__control">
          <label>AMOUNT</label>
          <input
            onChange={AmountHandlerChange}
            value={Amount}
            type="number"
            min="0.0.1"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>DATE</label>
          <input
            onChange={DateHandlerChange}
            value={date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onclose}>
          CLOSE
        </button>
        <button type="submit">ADD EXPENSE</button>
      </div>
    </form>
  );
}
export default NewExpenseForm;
