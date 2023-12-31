const router = require ('express'). Router()
const places = require('../models/places.js')
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
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
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })
  
  router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id] })
    }
  })
  
        res.render('places/show', { place: places[id] })

      
  
  
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