# popfindr_twilio

Tool which can help find Xbox Series X in your nearby Targets stores that have it in stock. It will send an SMS via Twilio once there is stock in your area.

# Setup
```
npm install
node index.js
```

## Setup: Get popfindr request url
You want to navigate to the popfindr [site](https://popfindr.com/inventory/target/207-41-0001?title=Xbox%20Series%20X%20Console&img=https://i.imgur.com/y5w5njS.jpg). 
You want to open up Chrome dev tools -> Network tab.
Type in your zipcode and click the 'Get Stock' button.
In the network tab click the new entry and copy the request url.
Be sure to save this somewhere

## Setup: Twilio Account
You will need to create an [account](www.twilio.com/referral/byxAP2) on Twilio.
You will need to purchase a number ($1 a month and pay for any SMS messages you send).
Make sure the number is SMS capable.

## Setup: Update index.js
Update index.js with your Twilio Account SID, Twilio Auth Token, Twilio phone number and number you'd like to receive messages on.
You can also update the frequency of which the script runs with the cron schedule. Currently set to run every 1 minute.
Lastly you can change the quantity that will trigger a message. Currently set to 3 or more to filter out false positives.

## Where to run the script
I run my scripts from Digital Ocean. They have an Ubuntu droplet that already has node installed. Cost $5 a month to run droplet.
