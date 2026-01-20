import Sidebar from "./sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SisenseContextProvider } from "@sisense/sdk-ui";
import Dashboard1 from "./pages/Dashboard1";
import Dashboard2 from "./pages/Dashboard2";
import Dashboard3 from "./pages/Dashboard3";
import Analytics1 from "./pages/Analytics1"; // ✅ import the new page
import Columnchart from "./pages/Columnchart";
import Barchart from "./pages/Barchart";
import Piechart from "./pages/Piechart";
import CustomData from "./pages/Customdata";
import Chat_bot from "./pages/Chatbot";
import { AiContextProvider } from "@sisense/sdk-ui/ai";

export default function App() {
  return (
    <SisenseContextProvider
      url={process.env.REACT_APP_SISENSE_URL} // replace with your Sisense instance URL
      wat={process.env.REACT_APP_SISENSE_WAT} // your WAT token
    >
      <AiContextProvider>
        <BrowserRouter>
          <div className="d-flex min-vh-100 bg-light">
            <Sidebar />

            <main className="flex-grow-1 p-5">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/dashboards/1" replace />}
                />

                <Route
                  path="/dashboards"
                  element={<Navigate to="/dashboards/1" replace />}
                />
                <Route path="/dashboards/1" element={<Dashboard1 />} />
                <Route path="/dashboards/2" element={<Dashboard2 />} />
                <Route path="/dashboards/3" element={<Dashboard3 />} />

                <Route
                  path="/analytics"
                  element={<Navigate to="/analytics/1" replace />}
                />
                <Route path="/analytics/1" element={<Analytics1 />} />
                <Route path="/analytics/column" element={<Columnchart />} />
                <Route path="/analytics/bar" element={<Barchart />} />
                <Route path="/analytics/pie" element={<Piechart />} />
                <Route path="/advanced/custom-data" element={<CustomData />} />
                <Route path="/GenerativeAI/Chat_bot" element={<Chat_bot />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </AiContextProvider>
    </SisenseContextProvider>
  );
}
