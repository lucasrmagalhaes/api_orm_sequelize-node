'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Matriculas', [
      {
				status: "confirmado",
				estudante_id: 1,
				turma_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		  },
		  {
        status: "confirmado",
        estudante_id: 2,
        turma_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
	    },
		  {
        status: "confirmado",
        estudante_id: 3,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
	    },
		  {
        status: "confirmado",
        estudante_id: 4,
        turma_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
	    },
		  {
        status: "cancelado",
        estudante_id: 1,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
	    },
		  {
        status: "cancelado",
        estudante_id: 2,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
		  }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Matriculas', null, {});
  }
};
