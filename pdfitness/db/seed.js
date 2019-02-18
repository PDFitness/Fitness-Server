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
  {id: 1, exercise_name: "Running", exercise_description: "Running on road or treadmill"},
  {id: 2, exercise_name: "Back Barbell Squat", exercise_description: null},
  {id: 3, exercise_name: "Push Up", exercise_description: null},
], exercise => db.model('exercise').create(exercise))

const seedPersons = () => db.Promise.map([
  {id: 1, first_name: "client1f", last_name: "client1l", email: "user1@test.com", phone_number: null, profile_picture: null, information: null},
  {id: 2, first_name: "coach1f", last_name: "coach1l", email: "coach1@test.com", phone_number: null, profile_picture: null, information: null},
  {id: 3, first_name: "client2f", last_name: "client2l", email: "user2@test.com", phone_number: null, profile_picture: null, information: null},
  {id: 4, first_name: "coach2f", last_name: "coach2l", email: "coach2@test.com", phone_number: null, profile_picture: null, information: null},
], person => db.model('person').create(person))

const seedCoaches = () => db.Promise.map([
  {person_id: 2},
  {person_id: 4},
], coach => db.model('coach').create(coach))

const seedClients = () => db.Promise.map([
  {person_id: 1},
  {person_id: 3},
], client => db.model('client').create(client))

const seedWorkouts = () => db.Promise.map([
  {id: 1, workout_name: "Workout 1", notes: null, coach_id: 1},
  {id: 2, workout_name: "Workout 1 for coach 2", notes: null, coach_id: 2},
], workout => db.model('workout').create(workout))

/* ALTER SEQUENCE yourTableName_yourColumnName_seq RESTART WITH # */
const alterWorkoutIdSequence = () => db.query("ALTER SEQUENCE workout_id_seq RESTART WITH 3;")

const seedTrains = () => db.Promise.map([
  {coach_id: 1, client_id: 1},
  {coach_id: 2, client_id: 2},
], trains => db.model('trains').create(trains))

const seedIncludes = () => db.Promise.map([
  {id: 1, workout_id: 1, exercise_id: 1, repetitions: null, duration: null, distance: null, weight: null, pace: null},
  {id: 2, workout_id: 1, exercise_id: 2, repetitions: null, duration: null, distance: null, weight: null, pace: null},
  {id: 3, workout_id: 1, exercise_id: 1, repetitions: null, duration: null, distance: null, weight: null, pace: null},
  {id: 4, workout_id: 1, exercise_id: 3, repetitions: null, duration: null, distance: null, weight: null, pace: null},
  {id: 5, workout_id: 2, exercise_id: 1, repetitions: null, duration: null, distance: null, weight: null, pace: null},
  {id: 6, workout_id: 2, exercise_id: 2, repetitions: null, duration: null, distance: null, weight: null, pace: null},
  {id: 7, workout_id: 2, exercise_id: 3, repetitions: null, duration: null, distance: null, weight: null, pace: null},
  {id: 8, workout_id: 2, exercise_id: 1, repetitions: null, duration: null, distance: null, weight: null, pace: null},
], includes => db.model('includes').create(includes))

const alterIncludesIdSequence = () => db.query("ALTER SEQUENCE includes_id_seq RESTART WITH 9;")

const seedAssigns = () => db.Promise.map([
  {coach_id: 1, workout_id: 1, client_id: 1, completed_date: null, total_time: null, assign_date: null},
  {coach_id: 2, workout_id: 2, client_id: 2, completed_date: null, total_time: null, assign_date: null},
], assigns => db.model('assigns').create(assigns))


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
   .then(alterWorkoutIdSequence)
   .then(console.log(`Altered workout_id sequence OK`))
   .then(seedTrains)
   .then(trains => console.log(`Seeded ${trains.length} trains OK`))
   .then(seedAssigns)
   .then(assigns => console.log(`Seeded ${assigns.length} assigns OK`))
   .then(seedIncludes)
   .then(includes => console.log(`Seeded ${includes.length} includes OK`))
   .then(alterIncludesIdSequence)
   .then(console.log(`Altered includes_id sequence OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
