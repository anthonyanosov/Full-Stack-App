const express = require('express')
const router = express.Router()
const Item = require('../models/item')

// Get all items
router.get("/", async (req, res) => {
    try {
        const items = await Item.find()
        res.send(items)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get an item
router.get("/:id", getItem, (req, res) => {
    res.json(res.item)
})

// Create an item
router.post("/", async (req, res) => {
    const item = new Item({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        storeID: req.body.storeID
    })

    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update an item
router.patch("/:id", getItem, async (req, res) => {
    if (req.body.name != null) {
        res.item.name = req.body.name
    }
    if (req.body.quantity != null) {
        res.item.quantity = req.body.quantity
    }
    if (req.body.price != null) {
        res.item.price = req.body.price
    }
    if (req.body.storeID != null) {
        res.item.storeID = req.body.storeID
    }
    try {
        const updatedItem = await res.item.save()
        res.json(updatedItem)
    } catch (error) {
        req.status(400).json({ message: error.message })
    }
})

// Delete an item
router.delete("/:id", getItem, async (req, res) => {
    try {
        await res.item.remove()
        res.json({ message: 'Item successfully deleted' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getItem(req, res, next) {
    let item
    try {
        item = await Item.findById(req.params.id)
        if (item == null) {
            return res.status(404).json({ message: 'Cannot find item' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.item = item
    next()
}

module.exports = router
