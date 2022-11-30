import './ExpenseDate.css';

function Expensedate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className="Expense_date">
      <div className="Expense_text">{month}</div>
      <div className="Expense_text">{day}</div>
      <div className="Expense_text">{year}</div>
    </div>
  );
}
export default Expensedate;
