const axios = require('axios')
const cheerio = require('cheerio'),
    cheerioTableparser = require('cheerio-tableparser');
    
const accountSid = '<INSERT TWILIO ACCOUNT SID>';
const authToken = '<INSERT TWILIO AUTH TOKEN>';
const client = require('twilio')(accountSid, authToken);
const cron = require('node-cron');
    
    
const getInventory = async () => {
    try {
        return await axios.get('<INSERT POPFINDR URL>')
    } catch (error) {
        console.error(error)
    }
}

const getXbox = async () => {
    const inventory = await getInventory()
    
    // Let's find the table with the stock
    const b = inventory.data.indexOf('<table style="text-align:left!important;" class="table table-bordered">')
    
    // Let's parse table
    $ = cheerio.load(inventory.data.slice(b));
    cheerioTableparser($);
    var data = $("table").parsetable();

    data[2].forEach(function(quantity,index) {
        // Change quantity here. I set mine to 2 or higher for false positives
        if(quantity > 2){
            var store = data[0][index].slice(data[0][index].indexOf('>') + 1)
            store = store.substr(0, store.indexOf('</a>')); 
            var msg  = "Target store: " + store + " has " + quantity + " Xbox Series X's !!!!"
            console.log(msg)
            
            client.messages.create({body: msg, from: '<INSERT TWILIO NUMBER>', to: '<INSERT CELL>'}).then(message => console.log(message.sid));
        }
    });

}

cron.schedule('*/1 * * * *', () => {
    console.log('checking for stock every minute');
    getXbox()
});
