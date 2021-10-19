const router = require('express').Router()
const indexConttroller = require('../controllers/index')
const authentication = require('../middlewares/authentication')

router.get('/news', indexConttroller.getNews)
router.get('/standings/premierleague', indexConttroller.getTablePremierLeague)
router.get('/standings/laliga', indexConttroller.getTableLaLiga)
router.get('/clubs/premierleague', indexConttroller.showClubPremierLeague)
router.get('/clubs/laliga', indexConttroller.showClubLaLiga)
router.post('/register', indexConttroller.register)
router.post('/login', indexConttroller.login)

router.use(authentication)

router.post('/bookmarks/:id', indexConttroller.getBookmark)
router.get('/bookmarks', indexConttroller.showMyBookmark)

module.exports = router