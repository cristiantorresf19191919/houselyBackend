import { Service } from 'typedi'
import { PropertyRepository } from '../repositories/PropertyRepository'
import { Property } from '../../db/Entities/Property'

@Service()
export class PropertyUseCase {
    constructor(
        private propertyRepository: PropertyRepository
    ) {}

    async createProperty(property: Property): Promise<Property> {
        return this.propertyRepository.save(property)
    }

    async getPropertyById(id: string): Promise<Property | null> {
        return this.propertyRepository.findById(id)
    }

    async updateProperty(id: string, property: Partial<Property>): Promise<Property | null> {
        return this.propertyRepository.update(id, property)
    }

    async deleteProperty(id: string): Promise<Property | null> {
        return this.propertyRepository.delete(id)
    }

    async getAllProperties(): Promise<Property[]> {
        return this.propertyRepository.findAll()
    }
}
