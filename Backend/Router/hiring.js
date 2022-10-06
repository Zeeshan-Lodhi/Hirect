const hiringRouter = require(`express`).Router();
const { hiring } = require('../Controller/hiring');

hiringRouter.get("/hire*", hiring)

module.exports = { hiringRouter }