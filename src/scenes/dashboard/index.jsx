import { Box } from "@mui/material";

import Header from "../../components/Header";
import GetPartnerNft from "../../components/GetPartnerNft";
import WalletConnect from "../../components/WalletConnect";
const Dashboard = ({
  walletData,
  walletIsConnected,
  walletAddress,
  setWalletIsConnected,
  setWalletAddress,
  setWalletData,
}) => {
  return (
    <div className="flex justify-center">
      <Box m="20px">
        {walletIsConnected ? (
          <div>
            <Header title="Welcome " />
            <div>{walletData === "0" ? <GetPartnerNft /> : null}</div>
          </div>
        ) : (
          <>
            <Header title="Welcome to the club!" />
            <div>Please connect wallet to enter Lo Frayerim</div>
            <div>
              <WalletConnect
                walletIsConnected={walletIsConnected}
                setWalletIsConnected={setWalletIsConnected}
                walletAddress={walletAddress}
                setWalletAddress={setWalletAddress}
                setWalletData={setWalletData}
                walletData={walletData}
              />
            </div>
          </>
        )}
      </Box>
    </div>
  );
};

export default Dashboard;
