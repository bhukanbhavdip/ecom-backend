const Razorpay = require('razorpay');

apiKey="rzp_test_QoWZKoRKYpADHp"
apiSecret="Rxn3mqZVtoMI9tWRMHirFIeo"  

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;