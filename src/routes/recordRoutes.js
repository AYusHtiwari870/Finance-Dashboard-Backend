const router=require("express").Router();
const controller = require("../controllers/recordController");
const auth = require("../middleware/auth");
const{checkRole}=require("../middleware/role");
router.post("/",auth,checkRole(["admin"]),controller.createRecord);
router.get("/",auth,controller.getRecords);
router.put("/:id",auth,checkRole(["admin"]),controller.updateRecord);
router.delete("/:id",auth,checkRole(["admin"]),controller.deleteRecord);
module.exports=router;