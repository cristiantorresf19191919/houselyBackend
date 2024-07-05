import { Service } from 'typedi'
import PropertyEntity, { Property } from '../../db/Entities/Property'

@Service()
export class PropertyRepository {

    async save(property: Property): Promise<Property> {
        const newProperty = new PropertyEntity(property)
        return newProperty.save()
    }

    async findById(id: string): Promise<Property | null> {
        return PropertyEntity.findById(id)
    }

    async update(id: string, property: Partial<Property>): Promise<Property | null> {
        return PropertyEntity.findByIdAndUpdate(id, property, { new: true })
    }

    async delete(id: string): Promise<Property | null> {
        return PropertyEntity.findByIdAndDelete(id)
    }

    async findAll(): Promise<Property[]> {
        return PropertyEntity.find()
    }
}
