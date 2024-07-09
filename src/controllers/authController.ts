import express, {Request, Response} from 'express'
import Container from 'typedi'
import {AuthenticationUseCase} from '../users/application/AuthenticationUseCase'

const router = express.Router()

const authenticationGateway = Container.get(AuthenticationUseCase)

const wrapAsync = (fn) => (req: Request, res: Response) => {
  Promise.resolve(fn(req, res)).catch((e: any) => {
    res.status(500).send(`Server Error ${e?.message}`)
  })
}

router.post('/login', wrapAsync(async (req: Request, res: Response) => {
  const {email, password, username} = req.body
  console.log('🚀email, username, password >> ', email, username, password)
  if (!password || (!email && !username)) return res.status(404).json({msg:'Wrong Request'})
    const token = await authenticationGateway.login(email, username, password)
    return res.json({token})
}))

router.post('/register', wrapAsync(async (req, res) => {
  const {username, email, password} = req.body
  if (!email || !password || !username) return res.status(404).json({msg:'Wrong Request'})
    const token = await authenticationGateway.register(username, email, password)
    return res.json({token, msg:'userRegistered'})
}))


export default router
