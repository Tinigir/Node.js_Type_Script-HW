import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";

const Book = sequelize.define(
    "book",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
             validate: {
                len: {
                args: [[5]],
                msg: "Length min 5 symbol"
            },
            },
            unique: {
                args: true,
                msg: "Book with title already exist"
            },
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

// Book.sync();

export default Book;