import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import WalletIcon from "@mui/icons-material/Wallet";
import { IconButton } from "@mui/material";

const WalletConnect = () => {
  const { isConnected } = useAccount();

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div type="button" onClick={() => disconnect()}>
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
    <div onClick={() => connect()}>
      <IconButton>
        <WalletIcon />
      </IconButton>
    </div>
  );
};

export default WalletConnect;
