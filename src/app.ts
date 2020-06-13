import express, { Express } from 'express';
import cors from 'cors';
import path from 'path'
import routes from './routes';


class App {
    app: Express;

    constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors( {origin: '*' }))
    this.app.use(express.json())
  }

  routes() {
    this.app.use(routes) 
    this.app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
  }
}

export default new App().app;

// app.use(routes) 

// app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// console.log("http://localhost:3333")
// app.listen(3333)