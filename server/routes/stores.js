const express = require('express')
const router = express.Router()
const Store = require('../models/store')
const Item = require('../models/item')

// Get all stores
router.get("/", async (req, res) => {
    try {
        const stores = await Store.find()
        res.send(stores)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get all items in a store
router.get("/:id/items", async (req, res) => {
    try {
        const items = await Item.find()
        res.send(items)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get a store
router.get("/:id", getStore, (req, res) => {
    res.json(res.store)
})

// Create a store
router.post("/", async (req, res) => {
    const store = new Store({
        name: req.body.name,
        location: req.body.location
    })
    try {
        const newStore = await store.save()
        res.status(201).json(newStore)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Update a store
router.patch("/:id", getStore, async (req, res) => {
    if (req.body.name != null) {
        res.store.name = req.body.name
    }
    if (req.body.location != null) {
        res.store.location = req.body.location
    }
    try {
        const updatedStore = await res.store.save()
        res.json(updatedStore)
    } catch (error) {
        req.status(400).json({ message: error.message })
    }
})

// Delete a store
router.delete("/:id", getStore, async (req, res) => {
    try {
        await res.store.remove()
        res.json({ message: 'Store successfully deleted' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getStore(req, res, next) {
    let store
    try {
        store = await Store.findById(req.params.id)
        if (store == null) {
            return res.status(404).json({ message: 'Cannot find store' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.store = store
    next()
}

module.exports = router
