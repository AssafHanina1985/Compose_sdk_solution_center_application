import { Chart } from "@sisense/sdk-ui";
import * as DM from "../sample-ecommerce.ts";
import { measureFactory } from "@sisense/sdk-data";

export default function Piechart() {
  return (
    <div style={{ width: "100%" }}>
      <h3 className="chart-title">
        Basic piechart with style: Example of limiting slices
      </h3>
      <Chart
        chartType={"pie"}
        dataSet={DM.DataSource}
        dataOptions={{
          category: [DM.Commerce.AgeRange],
          value: [measureFactory.sum(DM.Commerce.Revenue)],
        }}
        styleOptions={{}}
      />
      <Chart
        chartType={"pie"}
        dataSet={DM.DataSource}
        dataOptions={{
          category: [DM.Commerce.AgeRange],
          value: [measureFactory.sum(DM.Commerce.Revenue)],
        }}
        styleOptions={{
          convolution: {
            enabled: true,
            independentSlicesCount: 4,
            selectedConvolutionType: "bySlicesCount",
          },
          labels: {
            categories: false,
          },
        }}
      />
    </div>
  );
}
