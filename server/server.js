const express = require("express")
const app = express()
const cors = require("cors")

app.use(
    cors({
        origin: "http://localhost:3000",
    })
)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const customersRouter = require('./routes/customers')

app.use("/api/v1/customer", customersRouter)

app.listen(5000, () => console.log('Server started '))