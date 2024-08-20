import {connection as db } from '../config/index.js'

class Products {
    fetchProducts(req,res){
        try{
            const strQry = `
            SELECT prodID, prodName, quantity, amount, Category, prodUrl
            FROM Products;
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error(err)
                    res.json({
                        status: res.statusCode,
                        results
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchProduct(req,res){
        try{
            const strQry = `
            SELECT prodID, prodName, quantity, amount, Category, prodUrl
            FROM Products
            WHERE prodID = ${req.params.id};
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error(err)
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    addProduct(req,res){
        try {
            let data = req.body
            const strQry = `
            INSERT INTO Products
            SET ?
            `
            db.query(strQry, [data], (err) => { 
                if (err) throw new Error('Couldn\'t add product')
                res.json({
                    status: res.statusCode,
                    msg: 'Product was added successfully'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
         }
    }
    async updateProduct(req,res){
        try{
            let data = req.body
            const strQry =`
            UPDATE Products
            SET ?
            WHERE prodID = '${req.params.id}';`
            db.query(strQry, [data], (err) => {
                if(err) throw new Error (err)
                    res.json({
                        status: res.statusCode,
                        msg: 'Updated Successfully'
                    })
            })
       } catch (e) {
        res.json({
            status: 404,
            msg: e.message
        })
       }
    }
    deleteProduct(req,res){
        try{
            const strQry = `
            DELETE 
            FROM Products
            WHERE prodID = ${req.params.id};`
    
            db.query(strQry, (err) => {
                if(err) throw new Error ('Unable to remove a product')
                    res.json({
                        status: res.statusCode,
                        msg: 'Product has been removed successfully'
                    })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

}

export{
    Products
}