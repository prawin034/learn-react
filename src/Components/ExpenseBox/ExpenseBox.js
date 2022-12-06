import { useState } from 'react';
import ChartExpense from '../ChartExpense/ChartExpense';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseBox.css';
function ExpenseBox(props) {
  const [filter, SetFilter] = useState('2021');

  const FIlterChangeValue = (filterChange) => {
    console.log('EXPENSE BOX ');
    SetFilter(filterChange);
  };

  const ExpenseFilterYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  return (
    <div className="container">
      <ExpenseFilter
        Selected={filter}
        filterChangeHandler={FIlterChangeValue}
      />
      {/* {ExpenseFilterYear.length === 0 ? (
        <p className="noexpense">NO EXPENES FOUND </p>
      ) : (
        ExpenseFilterYear.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            date={expenses.date}
            title={expenses.title}
            amount={expenses.amount}
          />
        ))
      )} */}
      {ExpenseFilterYear.length === 0 && (
        <p className="noexpense">NO DATA FOUND</p>
      )}
      <ChartExpense expenses={ExpenseFilterYear} />
      {ExpenseFilterYear.length > 0 &&
        ExpenseFilterYear.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            date={expenses.date}
            title={expenses.title}
            amount={expenses.amount}
          />
        ))}
    </div>
  );
}
export default ExpenseBox;
