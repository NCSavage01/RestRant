const React = require('react')
const Def = require('./default')

function home () {
    return(
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="/images/eggs.jpg" alt="Eggs" />
                    <div>
                        Photo by <a href="https://unsplash.com/@pupscruffs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Katie Bernotsky</a> on <a href="https://unsplash.com/photos/XT35Iz45mCQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <div>
                    <img src="/images/funny-dog.jpg" alt="Funny dog picture" />
                    <div>
                        Photo by <a href="https://unsplash.com/@alanking?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alan King</a> on <a href="https://unsplash.com/photos/KZv7w34tluA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

            </main>
        </Def>
    )
}

module.exports = home
