import conn from "../database/connect.js";
class SelecaoRepository {
  // CRUD

  create(selecao) {
    const sql = "INSERT INTO tb_selecoes SET ?;";
    return new Promise((resolve, reject) => {
        conn.query(sql, selecao,  (error, result) => {
          if (error) return reject("Não foi possível cadastrar");
          // fazer o parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        });
      });
  }

  findAll() {
    const sql = "SELECT * FROM tb_selecoes;";
    return new Promise((resolve, reject) => {
      conn.query(sql, (error, result) => {
        if (error) return reject("Não foi possível localizar");
        // fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }

  findById(id) {
    const sql = "SELECT * FROM tb_selecoes WHERE id=?;";
    return new Promise((resolve, reject) => {
      conn.query(sql, id, (error, result) => {
        if (error) return reject("Não foi possível localizar");
        // fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }
  update(selecao, id) {
    const sql = "UPDATE  tb_selecoes SET ? WHERE id=?;";
    return new Promise((resolve, reject) => {
        conn.query(sql, [selecao, id], (error, result) => {
          if (error) return reject("Não foi possível localizar");
          // fazer o parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        });
      });
}

  delete(id) { 
    const sql = "DELETE  FROM tb_selecoes WHERE id=?;";
    return new Promise((resolve, reject) => {
        conn.query(sql, id, (error, result) => {
          if (error) return reject("Não foi possível deletar");
          // fazer o parse dos resultados
          const row = JSON.parse(JSON.stringify(result));
          return resolve(row);
        });
      });
  }
}
export default new SelecaoRepository();
