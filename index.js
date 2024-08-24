import {express, routerUser} from './controller/userController.js'
import {prodRouter} from './controller/prodController.js'
import path from 'path'
import 'dotenv/config'
import { errorHandling } from './middleware/ErrorHandling.js'

const app = express()
const port = +process.env.PORT || 4000
const cors = require('cors');
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // Specific origin
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Expose-Headers", "Authorization");

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true
}))
app.use('/products', prodRouter)
app.use('/users', routerUser)

app.get('^/$|/urbanLoft', (req, res)=>{
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

app.get('*', (req,res) => {
    res.json({
        status: 404,
        msg: 'Page not found'
    })
})

app.use(errorHandling)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})