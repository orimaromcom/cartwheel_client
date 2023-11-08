import { useAccount, useContractRead } from "wagmi";

const REACT_APP_CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

const WalletData = () => {
  const { address } = useAccount();

  const getTokenIdByAddress = useContractRead({
    address: REACT_APP_CONTRACT_ADDRESS,
    functionName: "getTokenIdByAddress",
    args: [address],

    onSuccess() {
      console.log("token ID by address", getTokenIdByAddress.data?.toString());
    },
    onError(error) {
      console.log("get token ID Error", error);
    },
  });

  const handleNFTData = () => {
    console.log("this is the tokenIdData: ", getTokenIdByAddress.data.toString());
  };
  return <div onClick={handleNFTData}>ClickMe</div>;
};

export default WalletData;
