import React from "react";
import batteryCustomization from "./batteryCustomization";
import BatteryGauge from "react-battery-gauge";

const Battery = ({ batteryPercentage }) => {
  return (
    <div>
      <BatteryGauge
        value={batteryPercentage}
        maxValue={100}
        orientation="horizontal"
        padding={5}
        size={300}
        aspectRatio={0.52}
        animated={true}
        charging={false}
        customization={batteryCustomization}
      />
    </div>
  );
};

export default Battery;
