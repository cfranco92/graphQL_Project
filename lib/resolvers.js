'use strict'

const connectDb = require('./db');
const config = require('./../config');
const { ObjectId } = require('mongodb');

module.exports = {
  Query: {
    getCourses: async () => {
      let db;
      let courses = [];
      try {
        db = await connectDb(config.dbUrl);
        courses = await db.collection('courses').find().toArray();
      } catch (error) {
        console.error(error);
      }

      return courses;
    },
    getCourse: async (root, { id }) => {
      let db
      let course

      try {
        db = await connectDb(config.dbUrl);
        course = await db.collection('courses').findOne({ _id: ObjectId(id) })
      } catch (error) {
        console.error(error)
      }

      return course
    }
  }
}
