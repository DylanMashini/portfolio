const isProd = process.env.NODE_ENV == "production";

export default isProd
	? "https://www.dylanmashini.com"
	: "http://localhost:3000";
