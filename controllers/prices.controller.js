"use strict";

const fs = require("fs");
const axios = require("axios");

module.exports = async (req, res) => {
	const data = (
		await axios.get("http://localhost:5000/api/prices")
	).data.filter((el) => el.id == 1)[0].content;
  fs.writeFileSync(`${process.env.PWD}/store/price/price.txt`, data);
	res.sendFile(`${process.env.PWD}/store/price/price.txt`);
};
