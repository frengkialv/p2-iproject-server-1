const { verify } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
    const token = req.headers.access_token 
    try {
        const payload = verify(token)
        const foundUser = await User.findOne({
            where: {
                id: payload.id,
                email: payload.email
            }
        })
        if (!foundUser) {
            throw new Error ("User not found")
        }
        req.user = {
            id: foundUser.id,
            email: foundUser.email,
        }
        next()
    } catch (err) {
        if (err.message === "User not found") {
            res.status(401).json( { msg: "Invalid jwt token" } )
        } else {
            res.status(500).json( { msg: "Something Wicked Happened" } )
        }
    }
}

module.exports = authentication