module.exports = async (config) => {
	const app = config.app;
	app.get("/", (req, res) => {
		return res.status(200).send({
			message: "Welcome to Notification manage"
		});
	});
	app.post("/", (req, res) => {
		return res.status(200).send(req.body);
	});
	app.put("/", (req, res) => {
		return res.status(200).send(req.body);
	});
	app.patch("/", (req, res) => {
		return res.status(200).send(req.body);
	});
}