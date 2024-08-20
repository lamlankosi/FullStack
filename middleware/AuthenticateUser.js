import 'dotenv/config'
import jwt from 'jsonwebtoken'

const {signIn, verify} = jwt

function createToken(user){
    return signIn(
        {
            emailAdd: user.emailAdd,
            userPass: user.userPass
        },
        process.env.SECRETE_KEY,
        {
            expiresIn: '1h'
        }
    )
}

function verifyToken(req, res, next) {
    const token = req?.headers["authorisation"]
    if(token) {
        if(verify(token, process.env.SECRETE_KEY)){
            next()
        } else {
            res.json({
                status: res.statusCode,
                msg: 'Incorrect Email Address'
            })
        }
    } else {
        res.json({
            msg: 'Please Login'
        })
    }
}


export{
    createToken,
    verifyToken
}

