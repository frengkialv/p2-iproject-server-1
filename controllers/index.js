const axios = require('axios');
const { User, Club, Bookmark } = require('../models');
const { decode } = require('../helpers/bcrypt');
const { sign } = require('../helpers/jwt');

class indexConttroller{
    static async getNews(req, res, next) {
        try {
            const param = {
                country: 'id',
                apiKey: '3630e2a7ebda45e09922b0e3084d713d',
                category: 'sports',
            }
            const foundNews = await axios.get('https://newsapi.org/v2/top-headlines', {params: param})
            const result = foundNews.data.articles
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async getTablePremierLeague(req, res, next) {
        try {
            const param = {
                league: 39,
                season: 2021
            }
            const header = {
                "x-rapidapi-key": "0bd8a669b0dfe43d748248fdc429295a",
            }
            const foundTable = await axios.get('https://v3.football.api-sports.io/standings', {params: param, headers: header})
            const result = foundTable.data.response[0].league.standings[0]
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async getTableLaLiga(req, res, next) {
        try {
            const param = {
                league: 140,
                season: 2021
            }
            const header = {
                "x-rapidapi-key": "0bd8a669b0dfe43d748248fdc429295a",
            }
            const foundTable = await axios.get('https://v3.football.api-sports.io/standings', {params: param, headers: header})
            const result = foundTable.data.response[0].league.standings[0]
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async register(req, res, next) {
        const {email, password} = req.body
        try {
            const foundUser = await User.findOne({
                where: {email}
            })
            if(foundUser){
                
                res.status(400).json({msg: "Email already registered"})

            }
            console.log("test");
            const result = await User.create({ email, password })
            res.status(201).json(result)
        } catch (err) {
            if (err.message === 'Validation error: Validation isEmail on email failed') {
                res.status(500).json({msg: "Invalid email address"})
            }
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            const foundUser = await User.findOne({
                where: {
                    email
                }
            })
            if(foundUser) {
                const isValid = decode(password, foundUser.password)
                if(isValid) {
                    const access_token = sign({
                        id: foundUser.id,
                        email: foundUser.email,
                    })
                    res.status(200).json( {access_token} )
                } else {
                    res.status(401).json( { msg: "Email / password doesn't match" } )
                }
            } else {
                res.status(401).json( { msg: "Email / password doesn't match" } )
            }
        } catch (err) {
            next(err);
        }
    }

    static async getBookmark(req, res, next) {
        const ClubId = req.params.id
        const UserId = req.user.id

        try {
            const foundClub = await Club.findOne({ 
                where: { 
                    id: ClubId
                }
            })
            if (foundClub) {
                const foundBookmark = await Bookmark.findOne({
                    where: { 
                        UserId,
                        ClubId
                    }
                })
                if (foundBookmark) {
                    res.status(400).json({msg: "You have bookmarked this club"})
                } else {
                    const result = await Bookmark.create( { ClubId, UserId } )
                    res.status(201).json(result)
                }
            } else {
                res.status(404).json({ msg: `Club with id ${ClubId} not found` })
            }
        } catch (err) {
            next(err);
        }
    }

    static async showMyBookmark(req, res, next) {
        const UserId = req.user.id
        try {
            const foundBookmark = await Bookmark.findAll({
                where: {
                    UserId
                },
                include: [
                    {
                        model: User
                    },
                    {
                        model: Club
                    }
                ]
            })
            res.status(200).json(foundBookmark)
        } catch (err) {
            next(err);
        }
    }

    static async showClubPremierLeague(req, res, next) {
        try {
            const result = await Club.findAll({ 
                where: {
                    country: "England"
                },
                order: [
                    ['name', 'ASC']
                ]
            })
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async showClubLaLiga(req, res, next) {
        try {
            const result = await Club.findAll({ 
                where: {
                    country: "Spain"
                },
                order: [
                    ['name', 'ASC']
                ]
            })
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = indexConttroller;