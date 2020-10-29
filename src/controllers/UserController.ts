import { Request, Response } from 'express'
import ControllersInterface from './ControllersInterface'


let data: any[] = [

    { id: 1, name: "ali" },
    { id: 2, name: "amu" }
]

class UserController implements ControllersInterface {

    index(req: Request, res: Response): Response {
        return res.json(data)
    }
    create(req: Request, res: Response): Response {
        const { id, name } = req.body

        data.push({
            id: id,
            name: name
        })
        return res.send('data has been added')

    }
    show(req: Request, res: Response): Response {

        const { id } = req.params;
        let person = data.find(item => item.id == id)
        if (!person) {
            return res.send({ messages: `data dengan id ${id} tidak di temukan` })
        }
        return res.send(person)
    }
    update(req: Request, res: Response): Response {
        const { id } = req.params
        const { name } = req.body

        let person = data.find(items => items.id == id)
        if (!person) {
            return res.send({ messages: `data dengan id ${id} tidak di temukan` })
        } else {
            person.name = name
            return res.send(`data dengan id ${id} berhasil di update`)
        }
    }
    destroy(req: Request, res: Response): Response {
        const { id } = req.params
        let person = data.filter(items => items.id != id)
        return res.send(person)
    }

}

export default new UserController()
