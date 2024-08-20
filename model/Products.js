import {connection as db } from '../config/index.js'

class Products {
    fetchProducts(){
        try{
            const strQry = `
            SELECT prodName, quantity, amount, Category, prodUrl
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
    fetchProduct(){
        try{
            const strQry = `
            SELECT prodName, quantity, amount, Category, prodUrl
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
    async addProduct(){
        try{
            let data = req.body
            let strQry= `
            INSERT INTO Products
            SET ?`
            db.query(strQry, [data], (err) => {
                if(err) {
                    res.json({
                        status: res.statusCode,
                        msg: 'Unable to add a Product'
                    })
                } else {
                    res.json({
                        msg: 'A product has been added successfully.'
                    })
                }
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    async updateProduct(){
        try{
            let data = req.body
            const strQry =`
            UPDATE Products
            SET ?
            WHERE prodID = ${req.params.id};`
            db.query(strQry, [data], (err) => {
                if(err) throw new Error ('Couldn\'t Update product please try again')
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
    deleteProduct(){
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