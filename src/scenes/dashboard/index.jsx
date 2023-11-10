import { Box } from "@mui/material";

import Header from "../../components/Header";
import GetPartnerNft from "../../components/GetPartnerNft";
const Dashboard = ({ walletData, walletIsConnected, walletAddress }) => {
  console.log(walletIsConnected);
  return (
    <Box m="20px">
      <Header title="DASHBOARD" subtitle="Customizable Dashboard" />

      {walletIsConnected ? (
        <div>
          Hello , This is your wallet address: {walletAddress}
          <div>{walletData === "0" ? <GetPartnerNft /> : null}</div>
        </div>
      ) : null}
    </Box>
  );
};

export default Dashboard;
