import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Benefits from "./scenes/benefits";
import Transactions from "./scenes/transactions";
import Members from "./scenes/members";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [walletIsConnected, setWalletIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletData, setWalletData] = useState(undefined);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar walletData={walletData} walletIsConnected={walletIsConnected} />

          <main className="content">
            <Topbar
              walletIsConnected={walletIsConnected}
              setWalletIsConnected={setWalletIsConnected}
              setWalletData={setWalletData}
              walletData={walletData}
              setWalletAddress={setWalletAddress}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    walletIsConnected={walletIsConnected}
                    setWalletIsConnected={setWalletIsConnected}
                    setWalletData={setWalletData}
                    walletData={walletData}
                    setWalletAddress={setWalletAddress}
                  />
                }
              />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/members" element={<Members />} />
              <Route path="/transactions" element={<Transactions />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
