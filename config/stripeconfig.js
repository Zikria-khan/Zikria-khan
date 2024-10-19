console.log('Stripe Secret Key:',"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"); // Debugging line
const stripe = require('stripe')("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");
module.exports = stripe;
