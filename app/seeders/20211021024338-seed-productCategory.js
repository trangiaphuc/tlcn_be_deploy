'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'productCategories',
      [ 
        {
          catName: "Thịt, cá, hải sản",
          isShowing: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: "Rau, củ, trái cây",
          isShowing: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: "Mì, cháo, phở bún",
          isShowing: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: "Dầu ăn, gia vị",
          isShowing: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          catName: "Gạo, bột, đồ khô",
          isShowing: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('produCategories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
  }
};
