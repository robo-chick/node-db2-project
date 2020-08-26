const express = require("express")
const db = require("../data/config")

const router = express.Router()


// Get all cars
router.get("/cars", async (req, res, next) => {
    try {
        res.json(await db("cars"))
    } catch(err) {
        next(err)
    }
})

// Get car by ID
router.get("/cars/:id", async (req, res, next) => {
    try {
        const {id} = req.params
        const cars = await db("cars").where({id}).first()

        res.json(cars)
    } catch(err) {
        next(err)
    }
})

// Create new car
router.post("/cars", async (req, res, next) => {
    try {
        const [id] = await db("cars").insert({
            make: req.body.make,
            model: req.body.model,
            VIN: req.body.vin,
            mileage: req.body.mileage,
            transmissionType: req.body.transmissionType,
            titleStatus: req.body.titleStatus,
        })

        const newCar = await db("cars").where({id}).first()

        res.status(201).json(newCar)
    } catch(err) {
        next(err)
    }
})

// Edit car
router.put("/cars/:id", async (req, res, next) => {
    try {
        await db("cars")
        .update({
            make: req.body.make,
            model: req.body.model,
            VIN: req.body.vin,
            mileage: req.body.mileage,
            transmissionType: req.body.transmissionType,
            titleStatus: req.body.titleStatus
        })
        .where("id", req.params.id)

        const cars = await db("cars")
        .where("id", req.params.id)
        .first()

        res.json(cars)
    } catch(err) {
        next(err)
    }
})

// Delete car
router.delete("/cars/:id", async (req, res, next) => {
    try {
        await db("cars")
        .where("id", req.params.id)
        .del()

        res.status(204).end()
    } catch(err) {
        next(err)
    }
})


module.exports = router
