import React from "react";
import { Doughnut } from "react-chartjs-2";

interface IChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

export const Chart: React.FC<IChartProps> = ({ data }) => {
  return (
    <div>
      <h1>Chart</h1>
      <div>
        <Doughnut
          data={data as any}
          width={300}
          height={300}
          options={{
            maintainAspectRatio: false,
            datasets: {
              doughnut: {
                circumference: 180,
                rotation: 270,
                spacing: 10,
              },
            },
          }}
        />
      </div>
    </div>
  );
};
