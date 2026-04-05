const Record = require("../models/Record");
exports.createRecord = async (req, res) => {
  try {
    const record = await Record.create({
      ...req.body,
      userId: req.user.id,
    });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getRecords = async (req, res) => {
  try {
    const filter = {};
    if (req.query.type) filter.type = req.query.type;
    if (req.query.category) filter.category = req.query.category;
    const records = await Record.find(filter);
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deleteRecord = async (req, res) => {
    try{
  await Record.findByIdAndDelete(req.params.id);
  res.json({ msg: "Record Delete" });
}catch(err){
    res.status(500).json({error:err.message});
}
};