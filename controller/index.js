const db = require('../db');

const selectUsuarios = async function(){
    console.log('SELECT * FROM usuario');
    const usuarios = await db.selectUsuario();
    console.log(usuarios);
}

const insertUsuario = async function(){
    console.log('INSERT INTO usuario');
    const result = await db.insertUsuario({nome: "Giovanna", senha: "1234567876543"});
    console.log(result);
}

const deleteUsuario = async function(){
    console.log('DELETE FROM usuario');
    const result = await db.deleteUsuario(2);
    console.log(result);
}

const updateUsuario = async function(){
    console.log('UPDATE usuario');
    const result = await db.updateUsuario(3, {nome: "Italo", senha: "0987654567899876"});
    console.log(result);
}
// updateUsuario();

// selectUsuarios();
// //insertUsuario();
// deleteUsuario();
// selectUsuarios();