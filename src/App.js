import Battery from "./battery";
import Speedometer from "./speedometer";
import ThermometerScale from "./thermometer";
import OdometerDisplay from "./odometer";

import "./style.css";

function App() {
  return (
    <div className="display">
      <div className="odometer">
        <OdometerDisplay finalValue={8000} />
      </div>
      <div className="speedometer">
        <Speedometer speed={70} />
      </div>
      <div className="battery">
        <Battery batteryPercentage={45} />
      </div>
      <div className="thermometer">
        <ThermometerScale temperature={67} />
      </div>
    </div>
  );
}

export default App;
