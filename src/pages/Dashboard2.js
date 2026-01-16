import { DashboardById } from "@sisense/sdk-ui";

export default function Dashboard2() {
  return (
    <div>
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body">
          <div>
            <h3 className="chart-title">Embed Dashboard By Id</h3>
            <DashboardById dashboardOid="6943ea6539fb19e49ae28b51" />
          </div>
        </div>
      </div>
    </div>
  );
}
