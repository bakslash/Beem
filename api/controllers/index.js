
const svc = require('../services/index');
const dotenv = require('dotenv');
dotenv.config();

exports.network = async (req, res, next) => {
    try {

        const net = await svc.getNet()
        const mcc = req.params.mcc

        net.map((item) => {

            if (mcc == item.mcc) {
                console.log(item.network);
            }
        })

        res.send(net)


    } catch (err) {
        console.log(err)

    }

};

exports.networkName = async (req, res, next) => {
    try {

        const net = await svc.getNet()
        const country = req.params.country

        net.map((item) => {

            if (country == item.country  ) {
                console.log(item.network);
            }
        })

        res.send(net)


    } catch (err) {
        console.log(err)

    }

};

