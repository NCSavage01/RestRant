const router = require ('express'). Router()
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