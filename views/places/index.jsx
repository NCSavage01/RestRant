const React = require('react')
const Def = require('./default')

function home () {
    return(
        <Def>
            <main>
                <h1>Home</h1>
            </main>
        </Def>
    )
}
function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <a href={`/places/$}`}>{place.name}</a>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Def>
  )
  }
  
module.exports = home
