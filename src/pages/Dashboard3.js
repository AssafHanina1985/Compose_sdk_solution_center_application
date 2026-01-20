import {
  Chart,
  SisenseContextProvider,
  DashboardById,
  MemberFilterTile,
  WidgetById,
} from "@sisense/sdk-ui";
import * as DM from "../sample-ecommerce.ts";
import { filter, measureFactory, filterFactory } from "@sisense/sdk-data";
import { useState, useMemo } from "react";

// Added CodeExample (converted to valid JS - removed TypeScript generic)
const CodeExample = () => {
  const [conditionFilter, setConditionFilter] = useState(null);

  const filters = useMemo(
    () => (conditionFilter ? [conditionFilter] : []),
    [conditionFilter],
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Filter row — placed above the charts */}
      <div style={{ width: "100%", maxWidth: 720 }}>
        <MemberFilterTile
          title={"Condition"}
          dataSource={DM.DataSource}
          attribute={DM.Commerce.Condition}
          filter={conditionFilter}
          onChange={setConditionFilter}
        />
      </div>

      {/* Charts row — left to right, responsive */}
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <div style={{ flex: 1, minWidth: 320 }}>
          <Chart
            chartType={"column"}
            dataSet={DM.DataSource}
            dataOptions={{
              category: [DM.Category.Category],
              value: [measureFactory.sum(DM.Commerce.Revenue)],
              breakBy: [],
            }}
            filters={filters}
          />
        </div>

        <div style={{ flex: 1, minWidth: 240 }}>
          <Chart
            chartType={"pie"}
            dataSet={DM.DataSource}
            dataOptions={{
              category: [DM.Commerce.AgeRange],
              value: [measureFactory.sum(DM.Commerce.Revenue)],
              breakBy: [],
            }}
            filters={filters}
          />
        </div>
        <div style={{ flex: 1, minWidth: 240 }}>
          <Chart
            chartType={"line"}
            dataSet={DM.DataSource}
            dataOptions={{
              category: [DM.Commerce.Date.Months],
              value: [measureFactory.sum(DM.Commerce.Revenue)],
              breakBy: [],
            }}
            filters={filters}
          />
        </div>
      </div>
    </div>
  );
};

export default function Dashboard3() {
  return (
    <div>
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body">
          <div style={{ width: "100%" }}>
            <h3 className="chart-title">Apply filter on multiple charts</h3>
            <CodeExample />
          </div>
          ;
        </div>
      </div>
    </div>
  );
}
