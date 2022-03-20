const isProd = process.env.NODE_ENV == "production";

export default isProd ? "https://dylanmashini.com" : "http://localhost:3000";
