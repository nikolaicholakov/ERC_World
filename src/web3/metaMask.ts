import { Dispatch, SetStateAction } from "react";
// import { BrowserProvider, Signer, formatEther } from "ethers";

// export const connectMetaMask = async (updateState: Dispatch<SetStateAction<string>>) => {
//   const windowObj = window as any;
//   const eth = windowObj.ethereum;
//   try {
//     // check if the browser has MetaMask installed
//     if (eth) {
//       //   const provider = new BrowserProvider(eth);
//       // promt the user to connect to MetaMask
//       //   await provider.getSigner();

//       const accounts = await eth.request({ method: "eth_requestAccounts" });
//       eth.request({ method: "eth_accounts" }).then((accounts: string[]) => {
//         const account = accounts[0];
//         if (account) {
//           updateState(account);
//         } else {
//           updateState("");
//         }
//       });
//     } else {
//       throw new Error("MetaMask not detected! Please install MetaMask!");
//     }
//   } catch (error) {
//     alert("MetaMask not detected! Please install MetaMask!");
//     console.log(error);
//   }
// };

// export const walletConnectedListener = async (updateState: Dispatch<SetStateAction<string>>) => {
//   const windowObj = window as any;
//   const eth = windowObj.ethereum;
//   // check if the browser has MetaMask installed
//   if (eth) {
//     // const provider = new BrowserProvider(eth);
//     // check if the user has connected to MetaMask after a page refresh =>
//     try {
//       // event listener if the user has connected to metamask after a page refresh
//       //   eth.request({ method: "eth_accounts" }).then((accounts: string[]) => {
//       //     const account = accounts[0];
//       //     if (account) {
//       //       updateState(account);
//       //     } else {
//       //       updateState("");
//       //     }
//       //   });
//     } catch (error: any) {
//       alert(error.message);
//       console.log(error.message);
//     }
//     // <= check if the user has connected to MetaMask after a page refresh

//     // listen for MetaMask Connection Events =>
//     eth.on("accountsChanged", (accounts: string[]) => {
//       const account = accounts[0];
//       if (account) {
//         updateState(account);
//       } else {
//         updateState("");
//       }
//     });
//     // <= listen for MetaMask Connection Events
//   } else {
//     alert("MetaMask not detected! Please install MetaMask, to interact with this website!");
//   }
// };

// export const removeWalletConnectedListener = () => {
//   const windowObj = window as any;
//   const eth = windowObj.ethereum;
//   if (eth) {
//     eth.removeAllListeners("accountsChanged");
//   }
// };
