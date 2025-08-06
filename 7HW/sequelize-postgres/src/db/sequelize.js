import { Sequelize } from "sequelize";


console.log(process.env.DATABASE_HOST);
const sequelize = new Sequelize({
	dialect: process.env.DATABASE_DIALECT,
	database: process.env.DATABASE_NAME,
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	dialectOptions:{
		ssl:true
	}
});

export default sequelize;

export const connectDatabase = async()=>{

	try {
		await sequelize.authenticate();
		console.log("Database connected seccessfully");
	} catch (error) {
		console.log("Non able to connect to database", error.message);
		throw error.message;
	}
}