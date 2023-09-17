const Data = require("../Data")

const api = (req, res) =>{
    res.status(200)
    if (req.query.cat) {
        const cat = req.query.cat
        const catData = Data.filter(item => item.category === cat)
        return res.send(catData)
    }
    res.send(Data)
}

const singleData = (req, res) =>{
    res.status(200).send(Data.filter(item => item.id == req.params.id))
}

module.exports = {api, singleData}