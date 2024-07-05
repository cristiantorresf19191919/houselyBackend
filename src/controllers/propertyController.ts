import express from 'express'
import Container from 'typedi'
import { Property } from '../db/Entities/Property'
import {PropertyUseCase} from "../properties/application/PropertyUseCase";

const router = express.Router()
const propertyUseCase = Container.get(PropertyUseCase)

router.post('/', async (req, res) => {
    try {
        const propertyData: Property = req.body
        const property = await propertyUseCase.createProperty(propertyData)
        res.status(201).json(property)
    } catch (error:any) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const propertyId = req.params.id
        const property = await propertyUseCase.getPropertyById(propertyId)
        if (property) {
            res.status(200).json(property)
        } else {
            res.status(404).json({ message: 'Property not found' })
        }
    } catch (error:any) {
        res.status(400).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const propertyId = req.params.id
        const propertyData: Partial<Property> = req.body
        const updatedProperty = await propertyUseCase.updateProperty(propertyId, propertyData)
        if (updatedProperty) {
            res.status(200).json(updatedProperty)
        } else {
            res.status(404).json({ message: 'Property not found' })
        }
    } catch (error:any) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const propertyId = req.params.id
        const deletedProperty = await propertyUseCase.deleteProperty(propertyId)
        if (deletedProperty) {
            res.status(200).json(deletedProperty)
        } else {
            res.status(404).json({ message: 'Property not found' })
        }
    } catch (error:any) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const properties = await propertyUseCase.getAllProperties()
        res.status(200).json(properties)
    } catch (error:any) {
        res.status(400).json({ error: error.message })
    }
})

export default router
