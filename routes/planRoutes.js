const express = require('express');
const router = express.Router();

const {
	createPlan,
	getPaymentPlan,
	getPaymentPlans,
} = require('../controllers/planController');

router.post('/create-plan', createPlan);
router.get('/payment-plans/:id', getPaymentPlan);
router.get('/payment-plans', getPaymentPlans);

module.exports = router;
