import React, { useEffect, useState } from "react";
import { ContentGage } from "ac-thermometer";
import "tinper-bee/assets/tinper-bee.css";
import "ac-thermometer/dist/index.css";

const ThermometerScale = ({ temperature }) => {
  const [currentValue, setCurrentValue] = useState(10);

  useEffect(() => {
    const stepSize = 10; // Adjust this value based on your desired step size
    const interval = setInterval(() => {
      // Increase the current value by the step size
      setCurrentValue((prevValue) => prevValue + stepSize);
    }, 10); // Adjust the interval as needed

    // Ensure the final value is not exceeded
    if (currentValue >= temperature) {
      setCurrentValue(temperature);
      clearInterval(interval);
    }

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [currentValue, temperature]);

  return (
    <div className="thermometer-container">
      <div className="thermometer-item">
        <ContentGage
          theme="light"
          value={currentValue}
          max={100}
          steps="5"
          format="°C"
          size="small"
          height="400"
        />
      </div>

      <div className="thermometer-item">
        <ContentGage
          theme="light"
          value={currentValue}
          max={100}
          steps="5"
          format="°C"
          size="normal"
          height="400"
        />
      </div>

      <div className="thermometer-item">
        <ContentGage
          theme="light"
          value={currentValue}
          max={100}
          steps="5"
          format="°C"
          size="large"
          height="400"
        />
      </div>
    </div>
  );
};

export default ThermometerScale;
