import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { BrowserRouter } from "react-router-dom";
import { goerli } from "wagmi/chains";
import { infuraProvider } from "@wagmi/core/providers/infura";

const { publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [infuraProvider({ apiKey: "09c7aa1765c24b6eba2ca8c47a35b400" })]
);

const config = createConfig({
  autoConnect: true,

  publicClient,
  webSocketPublicClient,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig config={config}>
        <App />
      </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>
);
