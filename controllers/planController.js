const { default: axios } = require('axios');
const baseUrl = 'https://api.flutterwave.com/v3/payment-plans';

//create plan => ap1/v1/create-plan
exports.createPlan = async (req, res) => {
	let options = {
		method: 'POST',
		url: baseUrl,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.FLUTTER_SECRET_KEY}`,
		},
		body: JSON.stringify({
			amount: req.body.amount,
			name: req.body.name,
			interval: req.body.interval,
		}),
	};
	try {
		const response = await axios(options);
		return res.status(200).json({
			response: response.data,
		});
	} catch (error) {
		return res.status(400).json({
			error: error.message,
		});
	}
};

//get paymentPlan => /ap1/v1/payment-plans/:id
exports.getPaymentPlan = async (req, res) => {
	try {
		const response = await axios({
			method: 'GET',
			url: `${baseUrl}/${req.params.id}`,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.FLUTTER_SECRET_KEY}`,
			},
		});
		return res.status(200).json({ plan: response.data });
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

//get paymentPlans => /ap1/v1/payment-plans
exports.getPaymentPlans = async (req, res) => {
	try {
		const response = await axios({
			method: 'GET',
			url: baseUrl,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.FLUTTER_SECRET_KEY}`,
			},
		});
		return res.status(200).json({ plans: response.data });
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}
};

//update plan => /api/v1/update-plan/:id
exports.updatePlan = async (req, res) => {
	let options = {
		method: 'PUT',
		url: `${baseUrl}/${req.params.id}`,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.FLUTTER_SECRET_KEY}`,
		},
		body: JSON.stringify({ name: req.body.name, status: req.body.status }),
	};
	try {
		const response = await axios(options);
		return res.status(200).json({
			response: response.data,
		});
	} catch (error) {
		return res.status(400).json({
			error: error.message,
		});
	}
};
