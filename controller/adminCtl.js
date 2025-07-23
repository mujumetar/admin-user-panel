module.exports.dashboard = (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    console.log("err");
  }
};

module.exports.adminform = (req, res) => {
  try {
    res.render("admin_form");
  } catch (err) {
    console.log(err);
  }
};

module.exports.view_admin = (req, res) => {
  try {
    res.render("view_admin");
  } catch (err) {
    console.log(err);
  }
};

module.exports.insertadmin = async (req, res) => {
  console.log(req.body);
 
};
