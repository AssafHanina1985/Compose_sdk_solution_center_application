import { Chart } from "@sisense/sdk-ui";

const sampleData = {
  // example of sample data, fixed strucutre for columns, column types and rows
  columns: [
    { name: "Years", type: "date" },
    { name: "Quantity", type: "number" },
    { name: "Units", type: "number" },
  ],
  rows: [
    ["2019", 5500, 1500],
    ["2020", 4471, 7000],
    ["2021", 1812, 5000],
    ["2022", 5001, 6000],
    ["2023", 2045, 4000],
  ],
};

const CustomDataExample = () => {
  // implementation of sample data in chart
  return (
    <Chart
      chartType={"bar"}
      dataSet={sampleData}
      dataOptions={{
        category: [{ name: "Years", type: "date" }],
        value: [{ name: "Quantity", type: "number" }],
        breakBy: [],
      }}
    />
  );
};

export default function CustomData() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <h3 className="chart-title">Example Chart from custom data</h3>
        <CustomDataExample />
      </div>
      ;
    </div>
  );
}
