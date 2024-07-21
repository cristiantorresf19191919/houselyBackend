import mongoose from 'mongoose'
const { Schema } = mongoose

export type EntityId = typeof mongoose.Schema.Types.ObjectId
export const MongoId = Schema.Types.ObjectId
