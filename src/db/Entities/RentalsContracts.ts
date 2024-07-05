import mongoose, { Schema, Document } from 'mongoose'
import {EntityId, MongoId} from '../../typings/mongooseUtils'
import {PropertyCollectionName} from './Property'
import {UserCollectionName} from './User'

export interface Contract {
    terms: string
    signDate: Date
}

export interface RentalContracts extends Document {
    id: string
    propertyId: EntityId
    tenantId: EntityId
    ownerId: EntityId
    startDate: Date
    endDate?: Date
    contract?: Contract
}

const contractSchema: Schema = new Schema<Contract>({
    terms: { type: String, required: true },
    signDate: { type: Date, required: true }
})

const rentalContractsSchema: Schema = new Schema<RentalContracts>({
    propertyId: { type: MongoId, ref: PropertyCollectionName, required: true },
    tenantId: { type: MongoId, ref: UserCollectionName, required: true },
    ownerId: { type: MongoId, ref: UserCollectionName, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    contract: { type: contractSchema }
})

export const RentalContractsCollectionName = 'RentalContracts'
const RentalContractsEntity = mongoose.model<RentalContracts>(RentalContractsCollectionName, rentalContractsSchema)
export default RentalContractsEntity
