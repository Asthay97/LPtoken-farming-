import Web3 from 'web3';
import { abi, address } from './YieldFarming.json';

const web3 = new Web3(window.ethereum);

const yieldFarming = new web3.eth.Contract(abi, address);

export { web3, yieldFarming };
