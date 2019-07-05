const router = require("express").Router();
const passport = require("passport");
require("../../controllers/passportController")(passport);

// Matches with "api/logout"
router.route("/").get(
    function(req, res) {
        console.log("\nLogging User out.\n\nUser Is Logged Out: " + req.isUnauthenticated());
        req.logout();
        res.status(200).send("User Is Logged Out: " + req.isUnauthenticated());
    }
);

module.exports = router;