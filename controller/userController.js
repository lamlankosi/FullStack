import {users} from '../model/index.js'
import express from 'express'
import bodyParser from 'body-parser'

const routerUser = express()

routerUser.use(bodyParser.json())

//Fetching all Users
routerUser.get('/',  (req, res) => {
    users.fetchUsers(req, res)
})
//Fetching Single User
routerUser.get('/:id', (req,res) =>{
    users.fetchUser(req,res)
})
//Registering User
routerUser.post('/signUp', (req,res) =>{
    users.registerUser(req,res)
})
//Update User details
routerUser.patch('/:id', (req,res) =>{
    users.updateUser(req,res)
})
//Delete User 
routerUser.delete('/:id', (req,res) => {
    users.deleteUser(req,res)
})
//login a User
routerUser.post('/signIn', (req,res) =>{
    users.loginUser(req,res)
})

export{
    express,
    routerUser
}







