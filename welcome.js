const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
    res.json({
        message: "Welcome to the cars API"
    })
})

module.exports = router