const router = require("express").Router();
const{getSummary}=require("../controllers/dashboardController");
const auth = require("../middleware/auth");
router.get("/summary",auth,getSummary);
module.exports=router;