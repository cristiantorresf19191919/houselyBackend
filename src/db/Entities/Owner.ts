import {PropertyCollectionName} from './Property'
import {EntityId, MongoId} from '../../typings/mongooseUtils'
import mongoose, { Schema } from 'mongoose'
import {UserCollectionName} from './User'

export interface Owner {
    id?: string
    propertiesOwned: EntityId[]
    userId: EntityId
}

const ownerSchema: Schema = new Schema<Owner>({
    userId: { type: MongoId, ref: UserCollectionName, required: true },
    propertiesOwned: { type: [MongoId], ref: PropertyCollectionName }
})

export const OwnerCollectionName = 'Owners'
const OwnerEntity = mongoose.model<Owner>(OwnerCollectionName, ownerSchema)
export default OwnerEntity
