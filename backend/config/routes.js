const express = require('express')

module.exports = function(server) {
    //API ROTAS
    const router = express.Router()
    server.use('/api', router)

    // rotas de api
    const billingCycleService = require('./api/billingCycles/billingCycleServices');
    billingCycleService.register(router, '/billingCycles')
}