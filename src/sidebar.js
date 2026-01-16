import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./sidebar.css";
import { NAV_ITEMS } from "./nav.config";
import sisenseLogo from "./assets/sisense-logo.png";

export default function Sidebar() {
  const location = useLocation();

  // Helper: does current path match a section?
  const isSectionActive = (item) => {
    if (item.to)
      return (
        location.pathname === item.to ||
        location.pathname.startsWith(item.to + "/")
      );
    if (item.children?.length)
      return item.children.some((c) => location.pathname === c.to);
    return false;
  };

  // Default open state: open the section that contains the current route
  const initialOpen = useMemo(() => {
    const map = {};
    for (const item of NAV_ITEMS) {
      if (item.children?.length) {
        map[item.key] = isSectionActive(item);
      }
    }
    return map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [openSections, setOpenSections] = useState(initialOpen);

  // Auto-open the relevant section on route changes (nice UX)
  useEffect(() => {
    for (const item of NAV_ITEMS) {
      if (item.children?.length && isSectionActive(item)) {
        setOpenSections((prev) => ({ ...prev, [item.key]: true }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="sidebar d-flex flex-column p-4">
      <div className="sidebar-header mb-4">
        <img src={sisenseLogo} alt="Sisense" className="app-logo" />
        <span className="brand">Sisense Compose SDK</span>
      </div>

      <nav className="nav flex-column gap-1">
        {NAV_ITEMS.map((item) => {
          const hasChildren = !!item.children?.length;
          const active = isSectionActive(item);

          // Section (parent + nested)
          if (hasChildren) {
            const isOpen = !!openSections[item.key];

            return (
              <div key={item.key}>
                <button
                  type="button"
                  className={`sidebar-btn ${active ? "active" : ""}`}
                  onClick={() => toggleSection(item.key)}
                >
                  <i className={`bi ${item.icon}`} />
                  <span className="flex-grow-1">{item.label}</span>
                  <i
                    className={`bi ${
                      isOpen ? "bi-chevron-up" : "bi-chevron-down"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="sidebar-nested">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.key}
                        to={child.to}
                        className={({ isActive }) =>
                          `sidebar-btn nested ${isActive ? "active" : ""}`
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <i className="bi bi-dot" />
                        <span>{child.label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          // Simple link item
          return (
            <NavLink
              key={item.key}
              to={item.to}
              className={({ isActive }) =>
                `sidebar-btn ${isActive ? "active" : ""}`
              }
              style={{ textDecoration: "none" }}
            >
              <i className={`bi ${item.icon}`} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
