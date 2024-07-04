import 'reflect-metadata'
import express from 'express'
import authController from './controllers/authController'
import cors from 'cors'
import { json } from 'body-parser'
import mongoose, { ConnectOptions } from 'mongoose'
import * as dotenv from 'dotenv'
import { Container } from 'typedi'
import UserModel from './db/models/user'

dotenv.config()


function addDependencies() {
  // Adding mongo dependency to the IoC container
  console.log('📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕Registering partern Model dependency')
  Container.set('PartnerModel', UserModel)
}

async function createServer() {
  const app = express()
  app.use(cors())
  app.use(json())
  app.use('/api', authController)
  const port = process.env.PORT || 4400
  app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}/api`)
    console.log(`🚀 GraphQl Server ready at http://localhost:${port}/graphql`)
  })
}

async function connectMongoDB(): Promise<void> {
  const username = process.env.DB_USERNAME
  const password = process.env.DB_PASSWORD
  const mongoHost = process.env.DB_HOST
  const connectionString = `mongodb+srv://${username}:${password}@${mongoHost}/SAGNIRIB`
  const configuration: ConnectOptions = {
    authMechanism: 'DEFAULT',
    authSource: 'admin'
  }
  await mongoose.connect(connectionString, configuration)
  console.log('💾 Connected to MongoDB 📚📚📚📚📚📚📚📚📚📚')
}


async function main() {
  try {
    addDependencies()
    await connectMongoDB()
    await createServer()
  } catch (err: any) {
    console.error(`Error: ${err.message}`)
  }
}

main()
