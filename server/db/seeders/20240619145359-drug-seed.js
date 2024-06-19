'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Drugs', [
      {
        name: 'Лекарство 1',
        price: 100,
        description: 'Описание лекарства 1',
        image: '../../public/img/aspirin.jpg',
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекарство 2',
        price: 200,
        description: 'Описание лекарства 2',
        image: 'https://via.placeholder.com/150',
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекарство 1',
        price: 100,
        description: 'Описание лекарства 1',
        image: 'https://via.placeholder.com/150',
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекарство 2',
        price: 200,
        description: 'Описание лекарства 2',
        image: 'https://via.placeholder.com/150',
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекарство 1',
        price: 100,
        description: 'Описание лекарства 1',
        image: 'https://via.placeholder.com/150',
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекарство 2',
        price: 200,
        description: 'Описание лекарства 2',
        image: 'https://via.placeholder.com/150',
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекарство 1',
        price: 100,
        description: 'Описание лекарства 1',
        image: 'https://via.placeholder.com/150',
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекарство 2',
        price: 200,
        description: 'Описание лекарства 2',
        image: 'https://via.placeholder.com/150',
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекарство 1',
        price: 100,
        description: 'Описание лекарства 1',
        image: 'https://via.placeholder.com/150',
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Лекарство 2',
        price: 200,
        description: 'Описание лекарства 2',
        image: 'https://via.placeholder.com/150',
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
