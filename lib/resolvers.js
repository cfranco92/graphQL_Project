'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'My title',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'Programming'
  },
  {
    _id: 'anyid2',
    title: 'My title 2',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'Programming'
  },
  {
    _id: 'anyid3',
    title: 'My title 3',
    teacher: 'My teacher',
    description: 'A description',
    topic: 'Programming'
  }
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) =>{
     const course = courses.filter(course => course._id === args.id)
     return course.pop();
    }
  }
}
