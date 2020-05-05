'use stric'

const connectDb = require('./db');
const config = require('./../config');

module.exports = {
    createCourse: async (root, { input }) => {
        const defaults = {
            teacher: '',
            topic: ''
        }

        const newCourse = Object.assign(defaults, input);
        let db;
        let course;
        try {
            db = await connectDb(config.dbUrl);
            course = await db.collection('courses').insertOne(newCourse);
            newCourse._id = course.insertedId;
        } catch (error) {
            console.error(error);
        }

        return newCourse;
    }
}
