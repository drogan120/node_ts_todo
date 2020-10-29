import { Request, Response } from 'express'
import ControllerInterface from './ControllersInterface'

class AuthController implements ControllerInterface {
    index(req: Request, res: Response): Response {
        return res.send('halaman login')
    }
    create(req: Request, res: Response): Response {
        return res.send('create user')
    }
    update(req: Request, res: Response): Response {
        return res.send('update')
    }
    show(req: Request, res: Response): Response {
        return res.send('show')
    }
    destroy(req: Request, res: Response): Response {
        return res.send('destroy')
    }
}

export default new AuthController()