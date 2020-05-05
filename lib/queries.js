'use stric'

const connectDb = require('./db');
const config = require('./../config');
const { ObjectId } = require('mongodb');

module.exports = {
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
    },
    getStudents: async () => {
        let db;
        let students = [];
        try {
            db = await connectDb(config.dbUrl);
            students = await db.collection('students').find().toArray();
        } catch (error) {
            console.error(error);
        }

        return students;
    },
    getStudent: async (root, { id }) => {
        let db
        let student

        try {
            db = await connectDb(config.dbUrl);
            student = await db.collection('students').findOne({ _id: ObjectId(id) })
        } catch (error) {
            console.error(error)
        }

        return student
    }
}
