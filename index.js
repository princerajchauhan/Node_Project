const express = require("express")
const cors = require("cors")
const route = require("./Routing/categoryRoute")

const port = 3005

const server = express()

server.use(cors())

server.use("/", route)

server.listen(port, ()=>{
    try {
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console.log(error)
    }
})