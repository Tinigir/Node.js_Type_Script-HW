import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const Post = sequelize.define("post", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// Post.sync()
export default Post;

