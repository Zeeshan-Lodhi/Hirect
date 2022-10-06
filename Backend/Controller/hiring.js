const { hireData } = require('../data')

const hiring = (req, res) => {
    console.log(req.query.location)
    console.log(req.query.skill)
    console.log(req.query.experience)
    console.log(req.query.salary)

    if (req.query.experience) {
        var result = hireData.filter((elm) => {
            return elm.location == req.query.location && elm.skill == req.query.skill && elm.experience == req.query.experience
        })
    }
    else if (req.query.salary) {

        var result = hireData.filter((elm) => {
            return elm.location == req.query.location && elm.skill == req.query.skill && elm.salary == req.query.salary
        })
        console.log(result);

    }
    else if (req.query.experience && req.query.salary) {
        var result = hireData.filter((elm) => {
            return elm.location == req.query.location && elm.skill == req.query.skill && elm.experience == req.query.experience && elm.salary == req.query.salary
        })
    }

    else {
        var result = hireData.filter((elm) => {
            return elm.location == req.query.location && elm.skill == req.query.skill
        })
    }

    res.json(result)

}

module.exports = { hiring }