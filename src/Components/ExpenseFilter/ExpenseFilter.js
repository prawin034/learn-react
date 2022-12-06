import './ExpenseFilter.css';

function ExpenseFilter(props) {
  function DropdownHandler(event) {
    const eventData = event.target.value;

    props.filterChangeHandler(eventData);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>FILTER BY YEAR</label>
        <select value={props.Selected} onChange={DropdownHandler}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
