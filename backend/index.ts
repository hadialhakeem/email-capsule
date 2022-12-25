import express, {Application, Request, Response} from 'express';

const app: Application = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response)=>{
    res.send('hellow world')
})


app.listen(port, ()=>{
    console.log(`connected succesfully on port ${port}`)
})