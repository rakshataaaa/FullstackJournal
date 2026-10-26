'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.hasMany(models.Attendance,{foreignKey:'StudentId',as:'Students'})
      Course.hasMany(models.Attendance,{foreignKey:'CourseId',as:'Courses'})
    }
  }
  Attendance.init({
    studentId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Attendance',
  });
  return Attendance;
};