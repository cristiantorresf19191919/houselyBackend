import mongoose, { Schema, Document } from 'mongoose'

export interface Feedback extends Document {
    feedbackId: string
    entityType: 'house' | 'tenant' | 'owner'
    entityId: string
    feedback: string
    rating: number
    submittedOn: Date
}

const feedbackSchema: Schema = new Schema<Feedback>({
    feedbackId: { type: String, required: true, unique: true },
    entityType: { type: String, enum: ['house', 'tenant', 'owner'], required: true },
    entityId: { type: String, required: true },
    feedback: { type: String, required: true },
    rating: { type: Number, required: true },
    submittedOn: { type: Date, required: true }
})

export const FeedbackCollectionName = 'Feedbacks'
const FeedbackEntity = mongoose.model<Feedback>(FeedbackCollectionName, feedbackSchema)
export default FeedbackEntity
