'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Attendances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER,
        reference :{
          model:'Students',
          key : 'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      courseId: {
        type: Sequelize.INTEGER,
        reference :{
          model:'Courses ',
          key : 'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Attendances',{
    fields: ['studentId','courseId','date'],
    type:'unique',
    name:'unique_student_course'
  })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Attendances');

  }
};