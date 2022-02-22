const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    url_image: DataTypes.STRING,
    
  }, {
    timestamps: false,
    tableName: 'Products',
  });

  return Product;
};

module.exports = Product