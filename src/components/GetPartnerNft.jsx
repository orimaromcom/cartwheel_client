import { usePrepareContractWrite, useContractWrite } from "wagmi";
import NFTContractABI from "../contracts/NFTContract.json";

const REACT_APP_CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
const GetPartnerNft = () => {
  const { config } = usePrepareContractWrite({
    address: REACT_APP_CONTRACT_ADDRESS,
    abi: NFTContractABI,
    functionName: "mintNFT",
    onSuccess(data) {
      console.log("Success", data);
    },
  });

  const { write } = useContractWrite(config);

  return (
    <>
      <button onClick={write}>Become Partner</button>
    </>
  );
};

export default GetPartnerNft;
