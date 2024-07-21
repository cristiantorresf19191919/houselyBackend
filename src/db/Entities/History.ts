import mongoose, { Schema, Document } from 'mongoose'

export interface History extends Document {
    tenantId: string
    houseId: string
    ownerIds: string[]
    tenure: {
        startDate: Date
        endDate?: Date
    }[]
}

const historySchema: Schema = new Schema<History>({
    tenantId: { type: String, required: true },
    houseId: { type: String, required: true },
    ownerIds: { type: [String], required: true },
    tenure: [{
        startDate: { type: Date, required: true },
        endDate: { type: Date }
    }]
})

export const HistoryCollectionName = 'Histories'
const HistoryEntity = mongoose.model<History>(HistoryCollectionName, historySchema)
export default HistoryEntity
