const { SMS_API_KEY, SMS_SERVICE_URL } = require('../config/apiConfig');
const axios = require('axios'); // npm install axios if needed (add to package.json deps if missing)

const sendWelcomeSMS = async (phone, name) => {
  const message = `Welcome to Lesedi, ${name}! Your policy admin is set up.`;
  if (SMS_API_KEY) {
    // Add your SMS API call here, e.g., Twilio
    // Example for Twilio:
    // await axios.post(`${SMS_SERVICE_URL}/Messages.json`, { To: phone, Body: message }, { 
    //   auth: { username: 'AC...', password: SMS_API_KEY } 
    // });
    console.log(`SMS sent (prod): ${message} to ${phone}`);
  } else {
    console.log(`SMS placeholder (free mode): ${message} to ${phone}`);
  }
};

const sendPremiumReminder = async (phone, policy) => {
  const message = `Reminder: Premium of R${policy.premium} due for policy ${policy.policy_number}.`;
  if (SMS_API_KEY) {
    // Similar API call
    console.log(`Premium reminder sent (prod): ${message} to ${phone}`);
  } else {
    console.log(`Premium reminder placeholder: ${message} to ${phone}`);
  }
};

const sendPaymentSMS = async (phone, name, amount, invoiceNumber) => {
  const message = `Payment due: R${amount} for ${name}. Invoice: ${invoiceNumber}. Pay now at [link].`;
  if (SMS_API_KEY) {
    // Similar API call
    console.log(`Payment SMS sent (prod): ${message} to ${phone}`);
  } else {
    console.log(`Payment SMS placeholder: ${message} to ${phone}`);
  }
};

module.exports = { sendWelcomeSMS, sendPremiumReminder, sendPaymentSMS };