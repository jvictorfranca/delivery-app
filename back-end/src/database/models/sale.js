module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DOUBLE,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: Sales,
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'user_id', as: 'sale' });
    User.hasMany(models.Sale, { foreignKey: 'seller_id', as: 'seller' });
  };

  return Sale;
};