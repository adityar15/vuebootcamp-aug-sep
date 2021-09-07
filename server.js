const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
// const api = require('expressapiroutes')
// json parsing for api
app.use(cors())
app.use(express.json())

const stripe = require('stripe')('your_secret_key');
// app.use('/api', api)

var allowlist = ['http://127.0.0.1:8080']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    console.log('This is allowed request')
    corsOptions = { 
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204 } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/create_stripe_customer',cors(corsOptionsDelegate), async(req, res) => {
    const customer = await stripe.customers.create({
        email: req.body.email,
      });
    
      // save the customer.id as stripeCustomerId
      // in your database.
    // save the customer id to your database
      res.send({ customer });
})

app.post('/create_subscription', cors(corsOptionsDelegate), async (req, res) => {
    const customerId = req.body.customerId;
    const priceId = req.body.priceId;
  
    try {
      // Create the subscription. Note we're expanding the Subscription's
      // latest invoice and that invoice's payment_intent
      // so we can pass it to the front end to confirm the payment
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{
          price: priceId,
        }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });
  
      res.send({
        subscriptionId: subscription.id,
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      });
    } catch (error) {
      return res.status(400).send({ error: { message: error.message } });
    }
})

// not needed as subscription has client secret (see line 64 of this file)
// app.post('/client_secret', cors(corsOptionsDelegate),async(req,res)=>{

    
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: req.body.price * 100,
//       currency: 'gbp',
//       payment_method_types: ['card'],
//     });

//     res.send(paymentIntent)

// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})