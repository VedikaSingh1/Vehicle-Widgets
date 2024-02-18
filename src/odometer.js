import React, { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-train-station.css";
import "./odometer-custom-style.css";

const OdometerDisplay = ({ finalValue }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the current value by a step size (adjust as needed)
      setCurrentValue((prevValue) => prevValue + 100);
    }, 1); // Adjust the interval as needed

    // Clear the interval when the final value is reached
    if (currentValue >= finalValue) {
      clearInterval(interval);
    }

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentValue, finalValue]);

  return <Odometer value={currentValue} format="(,ddd),dd" />;
};

export default OdometerDisplay;

/*
import React, { useEffect, useRef } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-train-station.css";
import "./odometer-custom-style.css";

const OdometerDisplay = () => {
  const odometerRef = useRef(null);

  useEffect(() => {
    const odometer = new Odometer({
      el: odometerRef.current,
      value: 0, // Initial value
      // Additional configuration options can be provided here
    });

    // An example of updating the value
    odometer.update(12345);
  }, []);

  return (
    <div>
      
      <div ref={odometerRef}></div>
    </div>
  );
};

export default OdometerDisplay;
*/
