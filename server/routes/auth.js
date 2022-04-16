const { createOrUpdateUser } = require("../controllers/auth");
const { authCheck } = require("../middlewares/auth");

const router = require("express").Router();

router.post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;
