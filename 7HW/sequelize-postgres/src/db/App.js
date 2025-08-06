import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const App = sequelize.define("app", {
	name:{
		type: DataTypes.STRING,
		allowNull:false,
	},
	size:{
		type: DataTypes.NUMBER,
		allowNull: false
	}
})
// App.sync()
export default App;

