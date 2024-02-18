import ReactSpeedometer from "react-d3-speedometer";

const Speedometer = ({ speed }) => {
  return (
    <ReactSpeedometer
      maxValue={200}
      value={speed}
      needleColor="red"
      startColor="yellow"
      segments={10}
      endColor="blue"
      needleTransitionDuration={1000}
      needleTransition="easeElastic"
    />
  );
};
export default Speedometer;
