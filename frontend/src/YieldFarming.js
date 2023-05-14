import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { web3, yieldFarming } from './web3';

const YieldFarmingForm = () => {
  const [lpToken, setLpToken] = useState('');
  const [lpAmount, setLpAmount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.ethereum.enable();
  }, []);

  const handleDeposit = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const lpTokenAddress = ''; // TODO: get the LP token address for the selected token
    try {
      await yieldFarming.methods.depositLP(lpTokenAddress, lpAmount).send({ from: accounts[0] });
      setMessage(`Deposited ${lpAmount} ${lpToken} tokens successfully!`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const lpTokenAddress = ''; // TODO: get the LP token address for the selected token
    try {
      await yieldFarming.methods.withdrawLP(lpTokenAddress, lpAmount).send({ from: accounts[0] });
      setMessage(`Withdrawn ${lpAmount} ${lpToken} tokens successfully!`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleClaim = async (e) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    try {
      await yieldFarming.methods.getReward().send({ from: accounts[0] });
      setMessage(`Claimed rewards successfully!`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Select LP token:</Form.Label>
        <Form.Control as="select" value={lpToken} onChange={(e) => setLpToken(e.target.value)}>
          <option value="">Select token</option>
          {/* TODO: dynamically generate options for LP tokens */}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Amount:</Form.Label>
        <Form.Control type="number" value={lpAmount} onChange={(e) => setLpAmount(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleDeposit}>
        Deposit
      </Button>{' '}
      <Button variant="primary" type="submit" onClick={handleWithdraw}>
        Withdraw
      </Button>{' '}
      <Button variant="primary" type="submit" onClick={handleClaim}>
        Claim Rewards
      </Button>
      {message && <Alert variant="info">{message}</Alert>}
    </Form>
  );
};

export default YieldFarmingForm;
