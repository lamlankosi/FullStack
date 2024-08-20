import 'dotenv/config'
import jwt from 'jsonwebtoken'

const {sign, verify} = jwt

function createToken(user){
    return sign(
        {
            emailAdd: user.emailAdd,
            userPass: user.userPass
        },
        process.env.SECRET_KEY,
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

