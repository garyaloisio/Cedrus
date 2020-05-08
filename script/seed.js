'use strict'

const db = require('../server/db')
const {User, Movies} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const movies = await Promise.all([
    Movies.create({
      name: 'Avengers: Endgame',
      imageUrl:
        'https://i.pinimg.com/736x/93/f2/44/93f244ae8bd5080208feae973ef3c8d7.jpg',
      description:
        'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
      genre: 'Action',
      rating: '5'
    }),
    Movies.create({
      name: 'F9',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BZDZlMjc0MTItZWY2YS00ZDJhLWI2M2MtODVjNWFmYTQxYmJjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UY1200_CR64,0,630,1200_AL_.jpg',
      description:
        'Dominic Toretto and his crew join forces to battle the most skilled assassin and high-performance driver they have ever encountered -- his forsaken brother',
      genre: 'Action',
      rating: '4'
    }),
    Movies.create({
      name: 'Step Brothers',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR89,0,630,1200_AL_.jpg',
      description:
        'Brennan Huff (Will Ferrell) and Dale Doback (John C. Reilly) have one thing in common: they are both lazy, unemployed leeches who still live with their parents. When Brennans mother and Dales father marry and move in together, it turns the overgrown boys world upside down. Their insane rivalry and narcissism pull the new family apart, forcing them to work together to reunite their parents',
      genre: 'Comedy',
      rating: '5'
    }),
    Movies.create({
      name: 'Jumanji: The Next Level',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61RzxmEkbtL._AC_SL1000_.jpg',
      description:
        'When Spencer goes back into the fantastical world of Jumanji, pals Martha, Fridge and Bethany re-enter the game to bring him home. But the game is now broken -- and fighting back. Everything the friends know about Jumanji is about to change, as they soon discover there is more obstacles and more danger to overcome.',
      genre: 'Comedy',
      rating: '3'
    }),
    Movies.create({
      name: 'It: Chapter 2',
      imageUrl:
        'https://i.pinimg.com/736x/56/9a/65/569a65c80b90e449e2bd374e2f4a9293.jpg',
      description:
        'Defeated by members of the Losers Club, the evil clown Pennywise returns 27 years later to terrorize the town of Derry, Maine, once again. Now adults, the childhood friends have long since gone their separate ways. But when people start disappearing, Mike Hanlon calls the others home for one final stand. Damaged by scars from the past, the united Losers must conquer their deepest fears to destroy the shape-shifting Pennywise -- now more powerful than ever.',
      genre: 'Horror',
      rating: '4'
    }),
    Movies.create({
      name: 'The Invisible Man',
      imageUrl:
        'https://bloximages.chicago2.vip.townnews.com/newsbug.info/content/tncms/assets/v3/editorial/c/d1/cd147de4-cf4b-5a20-926c-023d0104a5e2/5e6634ea355fb.image.jpg',
      description:
        'After staging his own suicide, a crazed scientist uses his power to become invisible to stalk and terrorize his ex-girlfriend. When the police refuse to believe her story, she decides to take matters into her own hands and fight back.',
      genre: 'Horror',
      rating: '2'
    }),
    Movies.create({
      name: 'Frozen',
      imageUrl:
        'https://live.staticflickr.com/4806/45928926755_7f045a2f14_b.jpg',
      description:
        'DescriptionWhen their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Annas sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winters cold grip.',
      genre: 'Kids',
      rating: '4'
    }),
    Movies.create({
      name: 'Onward',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmyhotposters.com%2Fproducts%2Fonward-movie-poster-104214&psig=AOvVaw3FrKmbQEeek_8JgNaA-_RF&ust=1589048340249000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiJr8HwpOkCFQAAAAAdAAAAABAW',
      description:
        'Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father. Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries. But when dear Mom finds out her sons are missing, she teams up with the legendary manticore to bring her beloved boys back home.',
      genre: 'Kids',
      rating: '1'
    }),
    Movies.create({
      name: 'Parasite',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
      description:
        'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      genre: 'Drama',
      rating: '5'
    }),
    Movies.create({
      name: 'Joker',
      imageUrl:
        'https://cdn.shopify.com/s/files/1/0747/3829/products/mL3763.jpg?v=1571445754',
      description:
        'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he is part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.',
      genre: 'Drama',
      rating: '3'
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
