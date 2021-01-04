const mongoose = require( 'mongoose' );
const Course = require( './models/courses' );

mongoose.connect(
  `mongodb://localhost:27017/courses`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then( () => console.log( 'connected to mongodb !' ) )
  .catch( () => console.log( 'error: ', err ) );

// todo: Document - instance of Collection
// const newCourse = new Course( {
//   name: 'MongoDB',
//   author: 'Hackagon',
//   tags: [ 'MongoDB', 'Monggoose' ],
//   isPublished: true,
//   price: 10
// } );

// todo: save Document --- promise
// newCourse.save()
//   .then( course => console.log( course ) )
//   .catch( err => console.log( err ) );


