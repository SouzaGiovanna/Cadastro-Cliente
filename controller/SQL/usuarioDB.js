const usuarioDB = require('./db')

async function selectUsuario(){
    const conn = await usuarioDB.connect();
    const [rows] = await conn.query('SELECT * FROM usuario;');
    return rows;
}

async function insertUsuario(usuario){
    const conn = await usuarioDB.connect();
    const sql = 'INSERT INTO usuario(nome, senha) VALUES (?,?);';
    const values = [usuario.nome, usuario.senha];
    return await conn.query(sql, values);
}

async function deleteUsuario(id){
    const conn = await usuarioDB.connect();
    const sql = 'DELETE FROM usuario where id=?;';
    return await conn.query(sql, [id]);
}

async function updateUsuario(id, usuario){
    const conn = await usuarioDB.connect();
    const sql = 'UPDATE usuario SET nome=?, senha=? WHERE id=?';
    const values = [usuario.nome, usuario.senha, id];
    return await conn.query(sql, values);
}

async function getUsuarioId(id){
    const conn = await usuarioDB.connect();
    const sql = 'SELECT * FROM usuario where id=?;';
    const values = [id];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0) return rows[0];
    else return null;
}

module.exports = {selectUsuario, insertUsuario, deleteUsuario, updateUsuario, getUsuarioId};
