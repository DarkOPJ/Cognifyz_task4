import React from "react";
import { GaugeComponent } from "react-gauge-component";

const MosGauge = () => {
  return (
    <div>

        <GaugeComponent
        className="gauge-style"
          value={2.4}
          minValue= {0}
          maxValue= {5}
          type="radial"
          labels={{
            tickLabels: {
              type: "inner",
              ticks: [
                { value: 0 },
                { value: 1 },
                { value: 2 },
                { value: 3 },
                { value: 4 },
                { value: 5 },
              ],
            },
          }}
          arc={{
            colorArray: ["#EA4228", "#F5D800", "#5BE12C"],
            subArcs: [
                { limit: 0.2 },
                { limit: 0.4 },
                { limit: 0.6 },
                { limit: 0.8 },
                { limit: 1 },
                { limit: 1.2 },
                { limit: 1.4 },
                { limit: 1.6 },
                { limit: 1.8 },
                { limit: 2 },
                { limit: 2.2 },
                { limit: 2.4 },
                { limit: 2.6 },
                { limit: 2.8 },
                { limit: 3 },
                { limit: 3.2 },
                { limit: 3.4 },
                { limit: 3.6 },
                { limit: 3.8 },
                { limit: 4 },
                { limit: 4.2 },
                { limit: 4.4 },
                { limit: 4.6 },
                { limit: 4.8 },
                { limit: 5, tooltip: 5 },
              ],
            padding: 0.02,
            width: 0.3,
          }}
          pointer={{
            elastic: true,
            animationDelay: 0,
          }}
        />
    </div>
  );
};

export default MosGauge;
