const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express');

exports.getNet = async () => {
    try {
        const myUrl = 'https://www.mcc-mnc.com/'
        const { data } = await axios({
            method: 'GET',
            url: myUrl
        })

        const $ = cheerio.load(data)
        const elemSelector = '#mncmccTable > tbody > tr'

        const keys = [
            'mcc',
            'mnc',
            'iso',
            'country',
            'countryCode',
            'network'
        ]
        const netArr = []
        $(elemSelector).each((parentIdx, parentElem) => {
            let keyIdx = 0
            const netObj = {}

            $(parentElem).children().each((childIdx, childElem) => {
                const tdVal = $(childElem).text();

                if (tdVal) {
                    netObj[keys[keyIdx]] = tdVal

                    keyIdx++

                }
            })

            netArr.push(netObj);
            
        })


        return netArr
    } catch (err) {
        console.error(err)
    }
}

