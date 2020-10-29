import express, { Application } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import { user } from './routes'
class App {

    public app: Application

    constructor() {
        this.app = express()
        this.app.use(bodyParser.json())
        this.routes()
        this.plugins()
    }

    protected plugins() {
        this.app.use(morgan("dev"))
        this.app.use(compression())
        this.app.use(helmet())
        this.app.use(cors())
    }

    protected routes(): void {
        this.app.use('/users', user)
    }
}

const PORT: number = 3000
const app = new App().app
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
