import conn from "../database/connect.js";


class SelecaoController {
  index(req, res) {
    const sql = "SELECT * FROM tb_selecoes;";
    conn.query(sql, (error, result) => {
      if (error) {
        res.status(500).json({ error: "error" });
      } else {
        res.status(200).json(result);
      }
    });
  }

  show(req, res) {
    const id = req.params.id;
    const sql = "SELECT * FROM tb_selecoes WHERE id=?;";
    conn.query(sql, id, (error, result) => {
      const row = result[0];
      if (error) {
        res.status(500).json({ error: "error" });
      } else {
        res.status(200).json(row);
      }
    });
  }

  store(req, res) {
    const selecao = req.body;
    const sql = "INSERT INTO tb_selecoes SET ?;";
    conn.query(sql, selecao, (error, result) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(201).json(result);
      }
    });
  }

  update(req, res) {
    const id = req.params.id;
    const selecao = req.body;
    const sql = "UPDATE  tb_selecoes SET ? WHERE id=?;";
    conn.query(sql, [selecao, id], (error, result) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }

  delete(req, res) {
    const id = req.params.id;
    const sql = "DELETE  FROM tb_selecoes WHERE id=?;";
    conn.query(sql, id, (error, result) => {
      if (error) {
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }
}

// padrão singleton
export default new SelecaoController();
