module.exports = (sequelize, Sequelize) => {
    const FoodCategory = sequelize.define("foodCategories", {
      catName: {
        type: Sequelize.STRING
      },
      catIcon: {
        type: Sequelize.STRING
      },
      isShowing:{
        type: Sequelize.BOOLEAN
      }
    });
  
    return FoodCategory;
};