import mongoose, {Schema} from 'mongoose'

export enum Role {
    Owner = 'owner',
    Tenant = 'tenant',
}

export interface User {
    id?: string
    name: string
    username: string
    password: string
    phoneNumber?: string
    email?: string
    role?: Role
}
const userSchema: Schema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: false,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: { type: String, enum: Object.values(Role) }
})

export const UserCollectionName = 'Users'
const UserEntity = mongoose.model<User>(UserCollectionName, userSchema)
export default UserEntity
