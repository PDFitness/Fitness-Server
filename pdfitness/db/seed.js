const db = require('../db')

const seedProducts = () => db.Promise.map([
  {title: 'Hats',category: ['Clothes','Accessories'], current_price: 16, description: 'Fedora with a feather', availability: true, inventory: 100, promo_id: 1},
  {title: 'Ski Suits',category: ['Athletics', 'Clothes'], current_price: 11, description: 'Full body ski suit', availability: false, inventory: 5, promo_id: 1},
  {title: 'Fanny Pack',category: ['Accessories'], current_price: 12, description: 'Bright neon in all colors', availability: true, inventory: 64, promo_id: 1},
  {title: 'Chuck Taylors',category: ['Clothes','Shoes'], current_price: 15, description: 'A variation on a classsic', availability: false, inventory: 35},
  {title: 'Hairspray',category: ['Beauty'], current_price: 41, description: 'Full of CFCs', availability: true, inventory: 22, promo_id: 2},
  {title: 'Socks',category: ['Clothes'], current_price: 51, description: 'Big wooly socks', availability: true, inventory: 21},
  {title: 'Wigs', category: ['Accessories', 'Beauty'], current_price: 21, description: 'Business in the front, party in the back', availability: false, inventory: 100, promo_id: 2},
  {title: 'Chanel', category: ['Beauty'], current_price: 49, description: 'Chanel loose powder', availability: true, inventory: 100, promo_id: 2},
  {title: 'Cosmetics', category: ['Beauty'], current_price: 31, description: 'Revlon violet pink set', availability: true, inventory: 100, promo_id: 2},
  {title: 'Covergirl', category: ['Beauty'], current_price: 21, description: 'Cosmetics for the young generation', availability: false, inventory: 100, promo_id: 2},
  {title: 'Dior', category: ['Beauty'], current_price: 49, description: 'Luxury for your face', availability: true, inventory: 100, promo_id: 2},
  {title: 'Dolls', category: ['Accessories'], current_price: 9, description: 'For your room', availability: false, inventory: 100, promo_id: 2},
  {title: 'HighHeels', category: ['Shoes'], current_price: 27, description: 'Edge on your heel', availability: true, inventory: 100, promo_id: 2},
  {title: 'PinkSuit', category: ['Accessories', 'Clothes'], current_price: 22, description: 'Everything for your pink day', availability: false, inventory: 100, promo_id: 2},
  {title: 'Technicolor', category: ['Accessories', 'Clothes'], current_price: 31, description: 'Freedom', availability: false, inventory: 100, promo_id: 2},
  {title: 'Sneakers', category: ['Shoes', 'Athletics'], current_price: 62, description: 'Comply with your style', availability: false, inventory: 100, promo_id: 2},
  {title: 'FlyWatch', category: ['Accessories'], current_price: 20, description: 'What time is it now? 19: 08 ! ', availability: false, inventory: 100, promo_id: 2},
  {title: 'ThatWig', category: ['Accessories', 'Beauty'], current_price: 21, description: 'Party people', availability: false, inventory: 100, promo_id: 1},
  {title: 'Training set', category: ['Athletics', 'Clothes'], current_price: 21, description: 'Lion look', availability: false, inventory: 100, promo_id: 1},
  {title: 'Training suit for couple', category: ['Athletics', 'Clothes'], current_price: 21, description: 'Lion look', availability: false, inventory: 100, promo_id: 1},
], product => db.model('products').create(product));

const seedReviews = () => db.Promise.map([
 {rating: 1, review_text: "awful",product_id:5},
 {rating: 1, review_text: "if you have too much extra money ",product_id:1},
 {rating: 5, review_text: "the best!",product_id:2},
 {rating: 2, review_text: "waste of money",product_id:3},
 {rating: 3, review_text: "can be better",product_id:4},
 {rating: 3, review_text: "should be better",product_id:6},
 {rating: 4, review_text: "good price",product_id:7},
 {rating: 4, review_text: "just like description",product_id:1}
 ], review => db.model('reviews').create(review));

const seedExercises = () => db.Promise.map([
  {exerciseId: 1, exerciseName: "Running", ExerciseDescription: "Running on road or treadmill"},
  {exerciseId: 2, exerciseName: "Back Barbell Squat", ExerciseDescription: null},
  {exerciseId: 3, exerciseName: "Push Up", ExerciseDescription: null},
], exercise => db.model('exercise').create(exercise))

const seedPersons = () => db.Promise.map([
  {personId: 1, firstName: "client1f", lastName: "client1l", email: "user1@test.com", phone: null, profilePicture: null, Information: null},
  {personId: 2, firstName: "coach1f", lastName: "coach1l", email: "coach1@test.com", phone: null, profilePicture: null, Information: null},
], person => db.model('person').create(person))

const seedCoaches = () => db.Promise.map([
  {personId: 2},
], coach => db.model('coach').create(coach))

const seedClients = () => db.Promise.map([
  {personId: 1},
], client => db.model('client').create(client))

const seedWorkouts = () => db.Promise.map([
  {workoutId: 1, workoutName: "Workout 1", notes: null, coachId: 1},
], workout => db.model('workout').create(workout))

const seedTrains = () => db.Promise.map([
  {coachId: 1, clientId: 1},
], trains => db.model('trains').create(trains))

const seedIncludes = () => db.Promise.map([
  {includesId: 1, workoutId: 1, exerciseId: 1, repetitions: null, duration: null, distance: null, weight: null, pace: null},
  {includesId: 2, workoutId: 1, exerciseId: 2, repetitions: null, duration: null, distance: null, weight: null, pace: null},
  {includesId: 3, workoutId: 1, exerciseId: 1, repetitions: null, duration: null, distance: null, weight: null, pace: null},
  {includesId: 4, workoutId: 1, exerciseId: 3, repetitions: null, duration: null, distance: null, weight: null, pace: null},
], includes => db.model('includes').create(includes))

const seedConducts = () => db.Promise.map([
  {workoutId: 1, clientId: 1, completedDate: null, totalTime: null, assignDate: null},
], conducts => db.model('conducts').create(conducts))


 db.didSync
   .then(() => db.sync({force: true}))
   /*.then(seedProducts)
   .then(products => console.log(`Seeded ${products.length} products OK`))
   .then(seedReviews)
   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))*/
   .then(seedPersons)
   .then(person => console.log(`Seeded ${person.length} persons OK`))
   .then(seedCoaches)
   .then(coach => console.log(`Seeded ${coach.length} coaches OK`))
   .then(seedClients)
   .then(client => console.log(`Seeded ${client.length} clients OK`))
   .then(seedExercises)
   .then(exercise => console.log(`Seeded ${exercise.length} exercises OK`))
   .then(seedWorkouts)
   .then(workout => console.log(`Seeded ${workout.length} workouts OK`))
   .then(seedTrains)
   .then(trains => console.log(`Seeded ${trains.length} trains OK`))
   .then(seedConducts)
   .then(conducts => console.log(`Seeded ${conducts.length} conducts OK`))
   .then(seedIncludes)
   .then(includes => console.log(`Seeded ${includes.length} includes OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
