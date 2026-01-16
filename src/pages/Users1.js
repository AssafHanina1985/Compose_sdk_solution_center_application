import { WidgetById } from "@sisense/sdk-ui";

export default function Dashboard2() {
  return (
    <div>
      <h1 className="fw-semibold mb-4">Dashboard 2</h1>

      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body">
          <div style={{ width: "100%" }}>
            <h3 className="chart-title">
              Embed widget by ID from Sisense fusion dashboard
            </h3>
            <WidgetById
              dashboardOid="694d1e7e39fb19e49ae29be1"
              widgetOid="694d1e7e39fb19e49ae29bf5"
              description="Total Success Queries"
              styleOptions={{
                spaceAround: "Large",
                border: false,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
