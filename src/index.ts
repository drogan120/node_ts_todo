import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

class App {

    public app: Application;

    constructor() {
        this.app = express()
        this.routes();
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.send('oke')
        })
    }
}

const PORT: number = 3000
const app = new App().app;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
