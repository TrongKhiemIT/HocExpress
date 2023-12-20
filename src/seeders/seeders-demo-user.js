'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@email.com',
      password: '123456',
      firstName: 'Trong',
      lastName: 'Khiem',
      address: 'BacLieu',
      phonenumber: 'abc123456',
      gender: 1,
      image: "abc123456",
      roleId: 'ROLE',
      positionId: "position",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
