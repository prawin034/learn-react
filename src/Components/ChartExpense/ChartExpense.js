import Chart from '../Chart/Chart';

function ChartExpense(props) {
  const ChartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'April', value: 0 },
    { label: 'May', value: 0 },
    { label: 'june', value: 0 },
    { label: 'july', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expensemonth = expense.date.getMonth();
    ChartDataPoints[expensemonth].value += expense.amount;
    console.log(expense);
  }
  return <Chart datapoints={ChartDataPoints} />;
}
export default ChartExpense;
