import express from 'express'
import path from 'path'
import 'dotenv/config'

const app = express()
const port = +process.env.PORT || 4000


app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true
}))

app.get('^/$|/urbanLoft', (req, res)=>{
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})