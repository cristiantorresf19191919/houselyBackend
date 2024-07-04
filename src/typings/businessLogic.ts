export enum Role {
    owner = 'owner',
    tenant = 'tenant',
}
export interface User {
    name: string
    phoneNumber?: string
    email?: string
    role: Role
    state?: any
    userId: string
    feedbacks?: Feedback[]
}

interface History {
    tenantId: string
    houseId: string
    ownerIds: string[]
    tenure: {
        startDate: Date
        endDate?: Date
    }[]
}

type House = {
    id: string
    address: string
    price: number
    status: 'forsale' | 'sold' | 'pending' | 'rent'
    listDate: Date
    soldDate?: Date
    bedrooms: number
    bathrooms: number
    livingArea: number
    lotSize: number
    yearBuilt: number
    photos: string[]
    agentId: string
    propertyType: 'singleFamily' | 'multiFamily' | 'condo' | 'townhouse'
    description: string
    amenities: string[]
    location: {
        latitude: number
        longitude: number
    }
    city: string
    state: string
    zip: string
    history: History[]
    feedbacks: Feedback[]
}

export interface Tenant extends User {
    properties: House[]
    leasedProperties: string[]
}

export interface Owner extends User {
    propertiesOwned: string[]
}

export enum EntityType {
    House = 'House',
    Tenant = 'Tenant',
    Owner = 'Owner',
}

export interface Feedback {
    entityType: EntityType
    entityId: string
    feedback: string
    rating: number
    submittedOn: Date
}
