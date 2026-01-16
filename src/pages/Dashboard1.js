import { DashboardById } from "@sisense/sdk-ui";

export default function Dashboard1() {
  return (
    <div>
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body">
          <div>
            <h3 className="chart-title">Embed Dashboard By Id</h3>
            <DashboardById dashboardOid="69428188de14af77106fa6fd" />
          </div>
        </div>
      </div>
    </div>
  );
}
