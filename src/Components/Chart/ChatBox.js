import './Chartbox.css';
function ChatBox(props) {
  let barHeight = '0%';
  if (props.max > 0)
    barHeight = Math.round((props.value / props.max) * 100) + '%';
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barHeight, backgroundColor: 'blue' }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
export default ChatBox;
