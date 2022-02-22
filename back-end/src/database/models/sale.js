const Sale = (sequelize, DataTypes) => {
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
    tableName: 'Sales',
  });

  return Sale;
};

module.exports = Sale