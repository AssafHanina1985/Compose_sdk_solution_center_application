import { Chart } from "@sisense/sdk-ui";
import * as DM from "../sample-ecommerce.ts";
import { measureFactory } from "@sisense/sdk-data";

export default function Barchart() {
  return (
    <div style={{ width: "100%" }}>
      <h3 className="chart-title">Basic Example Chart with two measures</h3>

      <Chart
        dataSet={DM.DataSource}
        chartType="bar"
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
  );
}
