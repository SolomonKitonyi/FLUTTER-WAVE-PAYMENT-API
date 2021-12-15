const express = require('express');
const router = express.Router();

const {
	createPlan,
	getPaymentPlan,
	getPaymentPlans,
	updatePlan,
	cancelPlan,
} = require('../controllers/planController');

router.post('/create-plan', createPlan);
router.get('/payment-plans/:id', getPaymentPlan);
router.get('/payment-plans', getPaymentPlans);
router.put('/update-plan/:id', updatePlan);
router.put('/cancel-plan/:id/cancel', cancelPlan);

module.exports = router;
