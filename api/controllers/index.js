
const svc = require('../services/index');
const dotenv = require('dotenv');
dotenv.config();



exports.network = async (req, res, next) => {
    try {
        console.log("we are in log in module");

        const net = await svc.getNet() 
        console.log(net);
        res.send(net) 
        
   
      
      
    } catch (err) {
        console.log(err)
     
    }

};

