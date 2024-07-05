import mongoose, { Schema } from "mongoose"

export type PropertyStatus = 'rented' | 'pending' | 'available' | 'unavailable'
export type PopertyType = 'singleFamily' | 'multiFamily' | 'condo' | 'townhouse'
export interface Property {
    id?: string
    address?: string
    price?: number
    status: PropertyStatus
    listDate?: Date
    soldDate?: Date
    bedrooms?: number
    bathrooms?: number
    livingArea?: number
    lotSize?: number
    yearBuilt?: number
    photos?: string[]
    agentId?: string
    propertyType: PopertyType
    description?: string
    amenities?: string[]
    location?: {
        latitude?: number
        longitude?: number
    }
    city?: string
    state?: string
    zip?: string
}

const propertySchema: Schema = new Schema<Property>({
    address: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ['rented', 'pending', 'available', 'unavailable'], required: false },
    listDate: { type: Date, required: false },
    soldDate: { type: Date },
    bedrooms: { type: Number, required: false },
    bathrooms: { type: Number, required: false },
    livingArea: { type: Number, required: false },
    lotSize: { type: Number, required: false },
    yearBuilt: { type: Number, required: false },
    photos: { type: [String], required: false },
    agentId: { type: String, required: false },
    propertyType: { type: String, enum: ['singleFamily', 'multiFamily', 'condo', 'townhouse'], required: false },
    description: { type: String, required: false },
    amenities: { type: [String], required: false },
    location: {
        latitude: { type: Number, required: false },
        longitude: { type: Number, required: false }
    },
    city: { type: String, required: false },
    state: { type: String, required: false },
    zip: { type: String, required: false }
})

export const PropertyCollectionName = 'Properties'
const PropertyEntity = mongoose.model<Property>(PropertyCollectionName, propertySchema)
export default PropertyEntity
