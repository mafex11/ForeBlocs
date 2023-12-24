// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    address public owner;

    event ValueSet(uint256 value);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setValue(uint256 _value) public onlyOwner {
        emit ValueSet(_value);
    }
}
