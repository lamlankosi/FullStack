import {express, routerUser} from './controller/userController.js'
import {prodRouter} from './controller/prodController.js'
import path from 'path'
import 'dotenv/config'

const app = express()
const port = +process.env.PORT || 4000


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");

    next()
})
app.use('/product', prodRouter)
app.use('/user', routerUser)

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true
}))

app.get('*', (req,res) => {
    res.json({
        status: 404,
        msg: 'Page not found'
    })
})

app.get('^/$|/urbanLoft', (req, res)=>{
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})