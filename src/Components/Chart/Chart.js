import ChatBox from '../Chart/ChatBox';
import './Chart.css';
const Chart = (props) => {
  const datapointsvalue = props.datapoints.map((datapoint) => datapoint.value);
  const totalmax = Math.max(...datapointsvalue);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChatBox
          key={datapoint.label}
          value={datapoint.value}
          max={totalmax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
