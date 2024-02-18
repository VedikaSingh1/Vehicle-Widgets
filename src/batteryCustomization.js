const batteryCustomization = {
  batteryBody: {
    strokeWidth: 4,
    cornerRadius: 6,
    fill: "none",
    strokeColor: "#111",
  },
  batteryCap: {
    fill: "none",
    strokeWidth: 4,
    strokeColor: "#111",
    cornerRadius: 2,
    capToBodyRatio: 0.4,
  },
  batteryMeter: {
    fill: "green",
    lowBatteryValue: 15,
    lowBatteryFill: "red",
    outerGap: 1,
    noOfCells: 1,
    interCellsGap: 1,
  },
  readingText: {
    lightContrastColor: "#111",
    darkContrastColor: "#fff",
    lowBatteryColor: "red",
    fontFamily: "Helvetica",
    fontSize: 14,
    showPercentage: true,
  },
  chargingFlash: {
    scale: undefined,
    fill: "orange",
    animated: true,
    animationDuration: 1000,
  },
};

export default batteryCustomization;
