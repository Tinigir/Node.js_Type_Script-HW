import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";

const App = sequelize.define(
    "app",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    });

// App.sync();

export default App;