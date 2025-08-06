import { sequelize } from "./db/db.js";
import { Product } from "./models/product.js";

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected");

    await Product.sync({ force: true });
    console.log("Table 'products' created");

    process.exit();
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
})();
