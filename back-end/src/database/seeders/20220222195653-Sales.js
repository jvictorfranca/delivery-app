module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        user_id: 1,
        seller_id: 1,
        total_price: 1.5,
        delivery_address: 'Apple Street',
        delivery_number: '55',
        sale_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        status: 'Pendente',
      },
      {
        user_id: 2,
        seller_id: 1,
        total_price: 5.5,
        delivery_address: 'Coca Street',
        delivery_number: '50',
        sale_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        status: 'Entregue',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};

// referência do formato da data : https://stackoverflow.com/questions/20083807/javascript-date-to-sql-date-object 