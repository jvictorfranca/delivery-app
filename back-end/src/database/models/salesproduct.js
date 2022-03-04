const SalesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('salesProduct', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, { 
    timestamps: false,
    tableName: 'salesProducts',
    underscored:true
      });

  SalesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId' });
      models.product.belongsToMany(models.sale, {
        as: 'sales',
        through: SalesProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
      });
  };

  return SalesProduct;
};

module.exports = SalesProduct