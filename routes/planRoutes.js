const express = require('express');
const router = express.Router();

const {
	createPlan,
	getPaymentPlan,
	getPaymentPlans,
	updatePlan,
} = require('../controllers/planController');

router.post('/create-plan', createPlan);
router.get('/payment-plans/:id', getPaymentPlan);
router.get('/payment-plans', getPaymentPlans);
router.put('/update-plan/:id', updatePlan);

module.exports = router;
