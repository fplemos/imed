//@ts-ignore
const crud = require('investira.server.sdk').crud;
const dao = require('../daos/daoUsuario');

const crudUsuario = {
    /**
     * Retorna somente um registro, caso exista
     *
     * @param {object} pCN Banco de dados(Schema)
     * @param {object} pConditions Objeto com os atributos e respectivos valores para a consulta.
     * 						  Os nomes dos atributos do object deve ser iguais aos respectivos nomes das colunas na tabela.
     * 						  ex: {client_id: 2, client_name: "teste"}
     * @param {array} pColumns Array com os nomes das colunas a serem retornadas. ex: ["user","name"]
     * 					   Quando não informada ou null, retorna todas as colunas descritas no atributo 'columns' do metadado do Dao.
     * @returns Promise com os dados lidos ou null quando não existir
     */
    onReadOne: (pCN, pConditions, pColumns) => {
        return dao.readOne(pCN, pConditions, pColumns);
    },
    /**
     * Insere registro
     *
     * @param {object} pCN Banco de dados(Schema)
     * @param {object} pDataObject Objeto com os valores a serem inseridos.
     * 						  Os nomes dos atributos do object deve ser iguais aos respectivos nomes das colunas na tabela.
     * 						  ex: {client_id: 2, client_name: "teste"}
     * @returns Promise com os dados incluídos, inclusive com a autoincremento/sequence, se existir
     */
    onAdd: (pCN, pDataObject) => {
        return dao.add(pCN, pDataObject);
    },
    /**
     * Exclui somente um registro, caso exista
     *
     * @param {object} pCN Banco de dados(Schema)
     * @param {object} pConditions Objeto com os atributos e respectivos valores para a exclusão.
     * 						  Os nomes dos atributos do object deve ser iguais aos respectivos nomes das colunas na tabela.
     * 						  ex: {client_id: 2, client_name: "teste"}
     * @returns Promise com a quantidade de registro excluídos
     */
    onRemoveOne: (pCN, pConditions) => {
        return dao.removeOne(pCN, pConditions);
    },
    /**
     * Atualiza dos dados utilizando
     *
     * @param {object} pCN Banco de dados(Schema)
     * @param {object} pDataObject Objeto com os valores a serem atulizados.
     * 						  Os nomes dos atributos do object deve ser iguais aos respectivos nomes das colunas na tabela.
     * 						  ex: {client_id: 2, client_name: "teste"}
     * @param {object} pConditions Objeto com as condições para a atualização.
     * 						  Os nomes dos atributos do object deve ser iguais aos respectivos nomes das colunas na tabela.
     * 						  ex: {client_id: 2, client_name: "teste"}
     * @returns Promise com os dados alterados ou null se nehum registro foi encontrado para edição
     */
    onModify: (pCN, pDataObject, pConditions) => {
        return dao.modify(pCN, pDataObject, pConditions);
    },
    /**
     * Merge registro. Altera se existir. Inclui se não existir.
     *
     * @param {object} pCN Banco de dados(Schema)
     * @param {object} pDataObject Objeto com os valores a serem atulizados.
     * 						  Os nomes dos atributos do object deve ser iguais aos respectivos nomes das colunas na tabela.
     * 						  ex: {client_id: 2, client_name: "teste"}
     * @param {object} pConditions Objeto com as condições para a atualização.
     * 						  Os nomes dos atributos do object deve ser iguais aos respectivos nomes das colunas na tabela.
     * 						  ex: {client_id: 2, client_name: "teste"}
     * @returns Promise com os dados alterados/incluídos
     */
    onMerge: (pCN, pDataObject, pConditions) => {
        return dao.merge(pCN, pDataObject, pConditions);
    }
};

module.exports = crud(crudUsuario);
