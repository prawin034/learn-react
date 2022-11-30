import Expensedate from '../ExpenseDate/ExpenseDate';
import '../ExpenseItem/ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="box">
      <div className="Expense_item">
        <div>
          <Expensedate date={props.date} />
        </div>
        <p className="Expense_title ">{props.title}</p>

        <div className="Expense_p">
          <p className="Expense_price"> {props.amount}rs</p>
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
