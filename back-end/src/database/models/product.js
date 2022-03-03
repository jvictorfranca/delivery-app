const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    urlImage: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'products',
    
  });

  return Product;
};

module.exports = Product