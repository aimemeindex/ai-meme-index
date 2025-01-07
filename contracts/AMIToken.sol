// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AMIToken is ERC20 {
    constructor() ERC20("AI MEME INDEX", "AMI") {
        _mint(msg.sender, 1_000_000_000 * 10**18);
    }
}
