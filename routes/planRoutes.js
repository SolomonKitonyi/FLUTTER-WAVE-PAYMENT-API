const express = require('express');
const router = express.Router();

const { createPlan, getPaymentPlan } = require('../controllers/planController');

router.post('/create-plan', createPlan);
router.get('/payment-plans/:id', getPaymentPlan);

module.exports = router;
