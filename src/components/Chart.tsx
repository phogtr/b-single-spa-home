import React from "react";
import { Doughnut } from "react-chartjs-2";

//@ts-ignorets-ignore
import { useLocalStorage, clearLocalStorage } from "@react-mf/utils";

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
  const { localStorageData, setLocalStorageData } = useLocalStorage();
  const [localStore, setLocalStore] = React.useState(localStorageData);

  // React.useEffect(() => {
  //   console.log(localStorageData);
  //   console.log(localStore);
  // }, [localStore]);

  const handleOnClick = () => {
    setLocalStorageData({
      name: "test",
      id: "1",
      note: "hello world",
    });
    setLocalStore({
      name: "test",
      id: "1",
      note: "hello world",
    });
  };

  const handleClearLocalStorage = () => {
    clearLocalStorage();
    setLocalStore({});
  };

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
                offset: 10,
              },
            },
          }}
        />
      </div>
      <button onClick={handleOnClick}>Update Local Storage</button>
      <button onClick={handleClearLocalStorage}>Clear Local Storage</button>
    </div>
  );
};
