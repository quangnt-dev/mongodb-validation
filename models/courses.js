const mongoose = require( 'mongoose' );

// todo: interface | table | collection
const CourseSchema = new mongoose.Schema( {
  _id: String,
  name: { type: String, required: true, minlength: 5, maxlength: 255 },
  category: { type: String, required: true, enum: [ 'web', 'mobile', 'hacking' ] },
  author: String,
  tags: {
    // todo: custom validation
    type: [ String ],
    validate: {
      validator: function ( tags ) {
        return tags && tags.length > 0;
      },
      message: "A course must have at least one tag"
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
    min: 10, max: 200,
  }
} );

const Course = mongoose.model( 'Course', CourseSchema );
// ! Course -->  courses
module.exports = Course;

