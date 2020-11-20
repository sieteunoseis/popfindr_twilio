# popfindr_twilio

Tool which can help find Xbox Series X in your nearby Targets stores that have it in stock. It will send an SMS via Twilio once there is stock in your area.

# Setup
npm install
node index.js

## Setup: Get popfindr request url
You want to navigate to the popfindr [site](https://popfindr.com/inventory/target/207-41-0001?title=Xbox%20Series%20X%20Console&img=https://i.imgur.com/y5w5njS.jpg). 
You want to open up Chrome dev tools -> Network tab.
Type in your zipcode and click the 'Get Stock' button.
In the network tab click the new entry and copy the request url.
Be sure to save this somewhere

## Setup: Twilio Account
You will need to create an account [site](https://www.twilio.com/try-twilio)
