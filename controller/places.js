const router = require ('express'). Router()
const places = require('../models/places.js')
router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
  
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
app.get('/', (req,res) =>{
        let places = [{
            name: 'Fullers',
            city: 'Pembroke',
            state: 'NC',
            cuisines: 'Southern',
            places: '/images/Fullers.jpg'
          }, {
            name: 'Miyabi',
            city: 'Fayetteville',
            state: 'NC',
            cuisines: 'Hibachi',
            pic: '/images/miyabi.jpg'
          }]
          res.render('places/index', { places })

          
    
res.render('places/index')
})
module.exports = router