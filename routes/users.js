const express = require("express");
const router = express.Router()

const Web3 = require("web3")
const web3 = new Web3(('https://mainnet.infura.io/v3/27c151d322ad4b21acb263c36e71cff9'));

router.get('/getbalance/:address', (req, res) => {
    address = req.params.address
    try{
        var balance = web3.eth.getBalance(address).then(function (balance) {
            ether_bal = Web3.utils.fromWei(balance, 'ether')
            res.json({ message:'success' ,address: address , balance_in_ether: ether_bal })
        }).catch(function(e) {
        });
    }
    catch{
        res.status(400).json({ address: address, message:'failed attempt, please try again' })
    }
        
    
})

module.exports = router