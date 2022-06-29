const database = require('../models');

class PessoaController {
    static async pegaPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await database.Pessoas.findAll();

            return res.status(200).json(pessoasAtivas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.scope('todos').findAll();

            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params;

        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: { 
                    id: Number(id)
                }
            });

            return res.status(200).json(umaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body;

        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            
            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
            await database.Pessoas.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            });
            
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: { 
                    id: Number(id)
                }
            });

            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params;

        try {
            await database.Pessoas.destroy({
                where: { 
                    id: Number(id)
                }
            });
            
            return res.status(200).json({ mensagem: `id ${id} deletado!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraPessoa(req, res) {
        const { id } = req.params;

        try {
            await database.Pessoas.restore({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json({
                message: `id ${id} restaurado`
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * http://localhost:3000/pessoas/1/matricula/5
     * http://localhost:3000/pessoas/:estudanteId/matricula/:matriculaId
     */
    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: { 
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });

            return res.status(200).json(umaMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;

        const novaMatricula = { 
            ...req.body, 
            estudante_id: Number(estudanteId) 
        };

        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
            
            return res.status(200).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;

        try {
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: { 
                    id: Number(matriculaId)
                }
            });

            return res.status(200).json(matriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            await database.Matriculas.destroy({
                where: { 
                    id: Number(matriculaId)
                }
            });
            
            return res.status(200).json({ mensagem: `id: ${matriculaId} deletado!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaMatriculas(req, res) {
        const { estudanteId } = req.params;

        try {
            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(estudanteId)
                }
            });

            const matriculas = await pessoa.getAulasMatriculadas();
            
            return res.status(200).json(matriculas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaMatriculasPorTurma(req, res) {
        const { turmaId } = req.params;

        try {
            const todasAsMatriculas = await database.Matriculas.findAndCountAll({
                where: {
                    turma_id: Number(turmaId),
                    status: 'confirmado'
                },
                limit: 20, // Qtd de Registros
                order: [[ 'estudante_id', 'ASC' ]]
            });

            // return res.status(200).json(todasAsMatriculas.count);

            return res.status(200).json(todasAsMatriculas.count);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;