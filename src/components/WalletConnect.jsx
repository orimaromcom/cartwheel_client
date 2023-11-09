import { useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import WalletIcon from "@mui/icons-material/Wallet";
import { IconButton } from "@mui/material";

const WalletConnect = ({ walletIsConnected, setWalletIsConnected }) => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (walletIsConnected) {
    return (
      <div
        type="button"
        onClick={() => {
          disconnect();
          setWalletIsConnected(false);
          console.log("disconnecting wallet");
        }}
      >
        <IconButton
          style={{
            backgroundColor: "#21b6ae",
          }}
        >
          <WalletIcon />
        </IconButton>
      </div>
    );
  }
  return (
    <div
      onClick={() => {
        connect();
        setWalletIsConnected(true);
        console.log("connecting wallet");
      }}
    >
      <IconButton>
        <WalletIcon />
      </IconButton>
    </div>
  );
};

export default WalletConnect;
