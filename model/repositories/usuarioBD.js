const db = require('./db');

async function insertUsuario(usuario){
    const conn = await db.connect();
    const sql = 'INSERT INTO usuario';
    const values = [usuario.nome, usuario.senha];
    return await conn.query(sql, values);
}

async function updateUsuario(usuario){
    const conn = await db.connect();
    const sql = 'UPDATE usuario';
    const values = [usuario.id, usuario.nome, usuario.senha];
    return await conn.query(sql, values);
}

async function selectUsuario(){
    const conn = await db.connect();
    const sql = 'SELECT * FROM usuario';
    const [rows] = await conn.query(sql);
    if(rows.length > 0)
        return rows[0];
    return null;
}

async function getUsuarioId(id){
    const conn = await db.connect();
    const sql = 'SELECT * FROM usuario WHERE id = ?';
    const values = [id];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0)
        return rows[0];
    return null;
}

async function login(nome, senha){
    const conn = await db.connect();
    const sql = 'SELECT * FROM usuario WHERE nome=? AND senha=?';
    const values = [nome, senha];
    const [rows] = await conn.query(sql, values);
    if(rows.length > 0)
        return rows[0];
    return null;
}

module.exports = {selectUsuario, insertUsuario, updateUsuario, getUsuarioId, login}