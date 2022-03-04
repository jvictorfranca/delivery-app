const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    urlImage: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'products',
    
  });

  return Product;
};

module.exports = Product