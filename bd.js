window.addEventListener('load');

var db = openDatabase("myDB", "1.0", "Formulario", 2 * 1024 * 1024);

db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS tabela ( id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT, email TEXT, telefone TEXT, cpf TEXT, cep TEXT, endereco TEXT, numero TEXT, complemento TEXT, bairro TEXT, cidade TEXT, estado TEXT)");
});
