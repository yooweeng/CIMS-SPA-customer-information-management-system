const express = require("express")
const router = express.Router()

let customers = []

router.get('/', (req, res) => {
    res.send(customers)
})

router.post('/', (req, res) => {
    const customer = req.body
    customers.push(customer)
    res.send(customers)
})

router
    .route('/:id')
        .get((req, res) => {
            for(let i=0; i<customers.length; i++){
                if(customers[i].customer_id === req.params.id){
                    res.send(customers[i])
                }
            }
            res.send('Customer detail not found')
        })
        .put((req, res) => {
            for(let i=0; i<customers.length; i++){
                if(customers[i].customer_id === req.params.id){
                    customers[i] = req.body
                    res.send(customers[i])
                }
            }
            res.send('Customer detail not found')
        })
        .delete((req ,res) => {
            for(let i=0; i<customers.length; i++){
                if(customers[i].customer_id === req.params.id){
                    customers.splice(i,1)
                    res.send(customers)
                }
            }
            res.send('Customer detail not found')
        })

module.exports = router