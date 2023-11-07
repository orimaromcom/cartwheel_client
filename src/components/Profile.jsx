import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const Profile = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="w-[13rem] flex text-white items-center">
        <button
          className="text-white bg-red-600 py-2  px-7 mx-4 rounded-full cursor-pointer hover:bg-red-800"
          type="button"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>

        {`Connected to: ...${address.slice(-4)}`}
      </div>
    );
  }
  return (
    <div className="w-[13rem] flex">
      <button
        className="text-white bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
        type="button"
        onClick={() => connect()}
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default Profile;
