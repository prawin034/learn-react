import { useState } from 'react';
import ExpenseBox from './Components/ExpenseBox/ExpenseBox';
import './Home.css';
import NewExpense from './Components/NewExpense/NewExpense';
const dummy_expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function Home() {
  const [expenses, setExpense] = useState(dummy_expense);

  const ExpenseFormData = (expense) => {
    setExpense((previousexpense) => {
      console.log(expense, ...previousexpense);
      return [expense, ...previousexpense];
    });
  };

  return (
    <div>
      <NewExpense onSubmitExpenseHandler={ExpenseFormData} />

      <ExpenseBox items={expenses} />
    </div>
  );
}

export default Home;
