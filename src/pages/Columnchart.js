import { Chart } from "@sisense/sdk-ui";
import * as DM from "../sample-ecommerce.ts";
import { measureFactory } from "@sisense/sdk-data";

export default function Columnchart() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <h3 className="chart-title">Basic Example Chart with two measures</h3>

        <Chart
          dataSet={DM.DataSource}
          chartType="column"
          dataOptions={{
            category: [DM.Commerce.AgeRange],
            value: [
              measureFactory.sum(DM.Commerce.Revenue, "Total Revenue"),
              measureFactory.sum(DM.Commerce.Cost, "Total Cost"),
            ],
            breakBy: [],
          }}
          styleOptions={{
            legend: {
              enabled: true,
              position: "bottom",
            },
          }}
          onDataPointClick={(point, nativeEvent) => {
            console.log("clicked", point, nativeEvent);
          }}
        />
      </div>

      <div style={{ width: "100%" }}>
        <h3 className="chart-title">Basic Example Chart with two dimensions</h3>

        <Chart
          dataSet={DM.DataSource}
          chartType="column"
          dataOptions={{
            category: [DM.Commerce.Gender, DM.Commerce.AgeRange],
            value: [measureFactory.sum(DM.Commerce.Cost, "Total Cost")],
            breakBy: [],
          }}
          styleOptions={{
            legend: {
              enabled: true,
              position: "bottom",
            },
          }}
          onDataPointClick={(point, nativeEvent) => {
            console.log("clicked", point, nativeEvent);
          }}
        />
      </div>

      <div style={{ width: "100%" }}>
        <h3 className="chart-title">Basic Example Chart with breakby</h3>
        <Chart
          chartType={"column"}
          dataSet={DM.DataSource}
          dataOptions={{
            category: [DM.Commerce.AgeRange],
            value: [measureFactory.sum(DM.Commerce.Revenue, "Sum of Revenue")],
            breakBy: [DM.Commerce.Condition],
          }}
        />
      </div>

      <div style={{ width: "100%" }}>
        <h3 className="chart-title">
          Basic Example Chart with breakby and series color mapping
        </h3>
        <Chart
          chartType={"column"}
          dataSet={DM.DataSource}
          dataOptions={{
            category: [DM.Commerce.AgeRange],
            value: [measureFactory.sum(DM.Commerce.Revenue, "Sum of Revenue")],
            breakBy: [DM.Commerce.Condition],
            seriesToColorMap: {
              New: "#7CB518",
              Refurbished: "#F3DE2C",
              Used: "#FB6107",
              Unspecified: "#FBB02D",
            },
          }}
        />
      </div>

      <div style={{ width: "100%" }}>
        <h3 className="chart-title">
          Basic Example Chart with two dimensions and two measures
        </h3>

        <Chart
          dataSet={DM.DataSource}
          chartType="column"
          dataOptions={{
            category: [DM.Commerce.AgeRange, DM.Commerce.Condition],
            value: [
              measureFactory.sum(DM.Commerce.Cost, "Total Cost"),
              measureFactory.sum(DM.Commerce.Revenue, "Total Revenue"),
            ],
            breakBy: [],
          }}
          styleOptions={{
            legend: {
              enabled: true,
              position: "bottom",
            },
          }}
          onDataPointClick={(point, nativeEvent) => {
            console.log("clicked", point, nativeEvent);
          }}
        />
      </div>
    </>
  );
}
