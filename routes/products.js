const express = require("express");
const router = express.Router();

const products = require("../controllers/products");

const passport = require("passport");

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	products.create,
);

// Retrieve all Note
router.get("/", products.findAll);
router.get("/CategorySales", products.findCategorySales);
router.get("/ProducerSales", products.findProducerSales);
router.get("/Top10ProductSales", products.findTop10ProductSales);

// Retrieve a single Note with noteId
router.get("/:id", products.findOne);
router.get("/:id/admin", products.findOneAdminPermission);

// Update a Note with Id
router.put(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	products.update,
);

// Delete a Note with Id
router.delete(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	products.delete,
);

router.put("/:id/comments", products.createComment);

module.exports = router;
