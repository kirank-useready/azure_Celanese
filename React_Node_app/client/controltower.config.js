module.exports = {
	apps:[
	    {
		name: "clkcontroltower",
		script: "server.js",
		env: {NODE_ENV: "production"},
		env_production: {NODE_ENV: "production"},
		instances: 1,
		exec_mode: "fork"
		}
		]
		}
			

