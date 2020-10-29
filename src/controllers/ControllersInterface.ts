import { Request, Response } from 'express'

interface ControllersInterface {

    index(req: Request, res: Response): Response
    create(req: Request, res: Response): Response
    show(req: Request, res: Response): Response
    update(req: Request, res: Response): Response
    destroy(req: Request, res: Response): Response

}

export default ControllersInterface