import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
    res.send("chata pra krl, me chupa");
});

export default router;
