// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./LPFarming.sol";

contract YieldFarmingFactory {
    address[] public yieldFarmingContracts;

    event YieldFarmingCreated(address indexed yieldFarmingContract, address indexed creator);

    function createYieldFarming(address token, uint256 rewardPerBlock) public returns (address) {
        YieldFarming yieldFarming = new YieldFarming(token, rewardPerBlock, address(this));
        yieldFarmingContracts.push(address(yieldFarming));
        emit YieldFarmingCreated(address(yieldFarming), msg.sender);
        return address(yieldFarming);
    }

    function getYieldFarmingContracts() public view returns (address[] memory) {
        return yieldFarmingContracts;
    }
}
