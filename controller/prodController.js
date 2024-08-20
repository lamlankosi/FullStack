import { products } from "../model/index.js";
import bodyParser from "body-parser";
import { express } from "./userController.js";

const prodRouter = express()

prodRouter.use(bodyParser.json())
//fetch products
prodRouter.get('/', (req, res) => {
    products.fetchProducts(req,res)
})
//fetch product
prodRouter.get('/:id', (req,res) => {
    products.fetchProduct(req,res)
})
//Add product
prodRouter.post('/add', (req,res)=>{
    products.addProduct(req,res)
})
//update product
prodRouter.patch('/:id', (req,res)=>{
    products.updateProduct(req,res)
})
//delete product
prodRouter.delete('/:id', (req,res) => {
    products.deleteProduct(req,res)
})

export{
    prodRouter
}


