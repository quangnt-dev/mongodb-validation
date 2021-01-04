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

// todo: Query Document
Course.find( { author: "Mosh" } )
  // .limit( 2 )
  // .select( { name: 1, author: 1 } )
  .select( 'name author' )
  .then( ( courses ) => {
    console.log( courses );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );

// todo: Toan tu so sanh 
/**
 * price: { $gt: 10, $lt: 20 }
 * { price: { $in: [ 10, 15, 20 ] } }
 * == eq
 * != ne
 * > gt || >= gte
 * < lt || <= lte
 * in || nin
 */
Course.find( { price: { $in: [ 10, 15, 20 ] } } )
  // .limit( 2 )
  // .select( { name: 1, author: 1 } )
  .select( 'name author price' )
  .then( ( courses ) => {
    console.log( "Toan tu So Sanh" );
    console.log( courses );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );

// todo: Toan Tu Logic
/**
 * .or
 * .and
 */

Course.find( { author: "Mosh" } )
  .and( [ { author: "Mosh" }, { isPublished: true } ] )
  // .or( [ { author: "Mosh" }, { isPublished: true } ] )
  .select( 'name author isPublished' )
  .then( ( courses ) => {
    console.log( "Toan Tu Logic" );
    console.log( courses );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );

// todo: Regular Expression  
/**
 * ?: || bat dau - / ^... /
 * ?: || ket thuc - / ...$ / 
 * ?: || dau ... cuoi - / .* ... .* /
 */

Course.find( { name: /^Node/ } )
  .then( ( courses ) => {
    console.log( "Regular Expression" );
    console.log( courses );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );

// todo: Count || Limit || Skip
/**
 * ?: skip + limit --> phan trang panigation
 * api/courses/pageNumber=2&pageSize=3
 * const pageNumber = 2;
 * const pageSize = 3; // tong so luong document trong 1 trang
 */
const pageNumber = 2;
const pageSize = 3;
Course.find()
  // .count()
  // .countDocuments()
  .skip( ( pageNumber - 1 ) * pageSize )
  .limit( pageSize )
  .then( ( courses ) => {
    console.log( "Count || Limit" );
    console.log( courses );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );


// todo: findById && findOne
// Course.findById( '5ff03150fa1e3baa7b56b3d2' )
Course.findOne( { _id: '5ff03150fa1e3baa7b56b3d2' } )
  .then( ( courses ) => {
    console.log( "// todo: findById && findOne" );
    console.log( courses );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );

// todo: update Document || updateOne || updateMany
// Course.updateMany( {
//! update tat ca cac field isPublished thanh false
//   $set: {
//     isPublished: false,
//   },
//!  Xóa field isPublished trong tất cả các documents
//   $unset: {
//     isPublished: 1
//   }
// } )
Course.updateOne(
  { _id: '5ff03150fa1e3baa7b56b3d2' },
  {
    $set: {
      name: 'FullStack Javascript'
    }
  }
)
  .then( ( courses ) => {
    console.log( "// todo: update Document " );
    console.log( courses );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );

// todo: delete Document: deleteOne({field}) || delelteMany({field}) || deleteByIdAndRemove("_id")
Course.deleteOne( { author: 'Mosh' } )
  .then( ( courses ) => {
    console.log( `// todo: delete Document: deleteOne({field}) || delelteMany({field}) || deleteByIdAndRemove("_id")` );
    console.log( courses );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );

