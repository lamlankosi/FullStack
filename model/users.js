import { compare, hash } from "bcrypt";
import {createToken} from '../middleware/AuthenticateUser.js'
import {connection as db} from '../config/index.js'


class Users {
    fetchUsers(req, res) {
        try{
            const strQry = `
            SELECT firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile, userPass
            FROM Users;
            `
            db.query(strQry, (err, results) => {
                if(err) throw new Error('Couldn\'t fetch users, review and try again')
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
    fetchUser(req, res) {
        try{
            const strQry =`
            SELECT firstName, lastName, userAge, Gender, userRole, emailAdd, userProfile, userPass
            FROM Users
            WHERE userID= ${req.params.id} 
            `
            db.query(strQry, (err, result) => {
                if(err) throw new Error ('Unable to fetch User, please try again')
                    res.json({
                        stauts: res.statusCode,
                        result: result[0]
                    })
            })
        } catch (e){
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    async registerUser(req, res) {
        try { 
            let data = req.body
            data.userPass = await hash(data.userPass, 12)

            let user = {
                emailAdd: data.emailAdd,
                userPass: data.userPass
            }
            let strQry = `
            INSERT INTO Users
            SET ?;
            `
            db.query(strQry, [data], (err) => {
                if (err) {
                    res.json({
                        status: res.statusCode,
                        msg: 'This email has already been taken, Login'
                    })
                } else {
                    const token = createToken(user)
                    res.json({
                        token,
                        msg: 'Welcome, You are now registered.'
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
    async updateUser(req, res) {
        try{
            let data = req.body
            if (data.pwd) {
                data.pwd = await hash(data.pwd, 12)
            }
            const strQry = `
            UPDATE Users
            SET ?
            WHERE userID = ${req.params.id};`

            db.query(strQry, [data], (err) => {
                if (err) throw new Error (err)
                res.json({
                status: res.statusCode,
                msg: 'Complete...The user record was updated'
            })
            })
        } catch (e) {
            res.json({
                status: 400,
                msg: e.message
            })
        }
    }
    deleteUser(req, res) {
        try{
            const strQry = `
            DELETE  
            FROM Users
            WHERE userID= ${req.params.id};
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('To delete a user, please review your delete query.')
                res.json({
                    status: res.statusCode,
                    msg: 'User details deleted successfully'
                })
            })
        } catch (e){
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    loginUser(req, res) {
        try{
            const {emailAdd, userPass} = req.body
            const strQry = `
            SELECT userID, firstName, lastName, userAge,Gender, emailAdd, password , userRole, profileURL
            FROM Users
            WHERE emailAdd = '${emailAdd}'`
            db.query(strQry, async (err, result) => {
                if (err) throw new Error (err)
                    if(!result?.length) {
                        res.json(
                            {
                                status: 401,
                                ms: 'You provided a wrong email'
                            }
                        )
                    } else {
                        const  ValidPwd = await compare(password, result[0].password)
                        if(ValidPwd) {
                            const token = createToken({
                                emailAdd,
                                password
                            })
                            res.json({
                                status: res.statusCode,
                                token,
                                results: result[0]
                            })
                        } else {
                            res.json({
                                status: 401,
                                msg: 'Invalid password or you have not registered'
                            })
                        }
                    }
            })
        } catch (e) {
            req.json ({
                status: 404,
                msg: e.message
            })
        }
    }
}

export {
    Users
}