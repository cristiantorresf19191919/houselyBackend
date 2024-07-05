import mongoose, { Schema, Document } from 'mongoose'
import {EntityId, MongoId} from '../../typings/mongooseUtils'

export interface Tenant extends Document {
    id?: string
    leasedProperties: EntityId[]
    watchlist: EntityId[]
    userId: EntityId
}

const tenantSchema: Schema = new Schema<Tenant>({
    userId: { type: MongoId, ref: 'User', required: true },
    leasedProperties: { type: [MongoId], ref: 'Property' },
    watchlist: { type: [MongoId], ref: 'Property' }
})

export const TenantCollectionName = 'Tenants'
const TenantEntity = mongoose.model<Tenant>(TenantCollectionName, tenantSchema)
export default TenantEntity
