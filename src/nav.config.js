export const NAV_ITEMS = [
  {
    key: "analytics",
    label: "Analytics",
    icon: "bi-bar-chart",
    children: [
      { key: "column", label: "Column chart", to: "/analytics/column" },
      { key: "bar", label: "Bar chart", to: "/analytics/bar" },
      { key: "pie", label: "Pie chart", to: "/analytics/pie" },
    ],
  },
  {
    key: "dashboards",
    label: "Dashboards",
    icon: "bi-speedometer2",
    children: [
      { key: "dashboard1", label: "Success Queries", to: "/dashboards/1" },
      { key: "dashboard2", label: "Failed Queries", to: "/dashboards/2" },
    ],
  },
  {
    key: "advanced",
    label: "Advanced",
    icon: "bi-people",
    children: [
      { key: "Custom Data", label: "Custom Data", to: "/advanced/custom-data" },
    ],
  },
];
