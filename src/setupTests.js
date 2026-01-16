const navItems = [
  { label: "Home", icon: "bi-house", href: "#" },
  { label: "Analytics", icon: "bi-graph-up", href: "#" },
  { label: "Users", icon: "bi-people", href: "#" },
  { label: "Settings", icon: "bi-gear", href: "#" },
];

export default function Sidebar() {
  return (
    <aside
      className="d-flex flex-column p-3 text-white bg-dark shadow"
      style={{ width: 280 }}
    >
      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-4 text-white text-decoration-none"
      >
        <span className="fs-5 fw-semibold">My App</span>
      </a>

      <div className="d-grid gap-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="btn btn-outline-light text-start d-flex align-items-center gap-2"
          >
            <i className={`bi ${item.icon}`} />
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      <hr className="text-white-50 my-4" />

      <div className="mt-auto">
        <button className="btn btn-light w-100 d-flex align-items-center justify-content-center gap-2">
          <i className="bi bi-box-arrow-right" />
          Logout
        </button>
      </div>
    </aside>
  );
}
