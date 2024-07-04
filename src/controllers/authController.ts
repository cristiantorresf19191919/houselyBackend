import express from 'express'
import Container from 'typedi'
import {AuthenticationGateway} from '../gateways/AuthenticationGateway'

const router = express.Router()
const authenticationGateway = Container.get(AuthenticationGateway)

router.get('/login', async (req, res) => {
  const {email, password} = req.body
  const token = await authenticationGateway.login(email, password)
  return res.json({token})
})

router.post('/register', async (req, res) => {
  const {username, email, password} = req.body
  const token = await authenticationGateway.register(username, email, password)
  return res.json({token, msg:'userRegistered'})
})


export default router