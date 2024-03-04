import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import { Sidebar, Topbar } from "./views/global";
import {
  Bar,
  Calendar,
  Contacts,
  Dashboard,
  Faq,
  Form,
  Georgraphy,
  Invoices,
  Line,
  Pie,
  Team,
} from "./views/pages";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={Dashboard} />
              <Route path="/team" element={Team} />
              <Route path="/contacts" element={Contacts} />
              <Route path="/invoices" element={Invoices} />
              <Route path="/form" element={Form} />
              <Route path="/bar" element={Bar} />
              <Route path="/pie" element={Pie} />
              <Route path="/line" element={Line} />
              <Route path="/faq" element={Faq} />
              <Route path="/georgraphy" element={Georgraphy} />
              <Route path="/calendar" element={Calendar} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
