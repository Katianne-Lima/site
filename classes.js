class Usuario{
    constructor(email, nome, senha){
        this.email = email;
        this.nome = nome;
        this.senha = senha;
    }
}


class Servico{
    constructor(foto, descricao, valor){
        this.foto = foto;
        this.descricao = descricao;
        this.valor = valor;
    }
}


class ListaDeUsuarios{
    constructor(){
        this.listaDeUsuarios = []
    }


    adicionarListaDeUsuarios(servico){
        if (usuario instanceof Usuario){
            this.listaDeUsuarios.push(usuario);
        } else {
            console.error ('Error!!')
        }
    }


    listarTodosOsServicos(){
        let todosOsServicos = 0;
        for (let i=0; i<this.listaDeServicos.length;i++){
            todosOsServicos += this.listaDeServicos[i];
        }


        return todosOsServicos;
    }
}


class ListaDeServicos{
    constructor(){
        this.listaDeServicos = []
    }


    adicionarServico(servico){
        if (servico instanceof Servico){
            this.listaDeServicos.push(servico);
        } else {
            console.error ('Error!!')
        }
    }


    listarTodosOsServicos(){
        let todosOsServicos = 0;
        for (let i=0; i<this.listaDeServicos.length;i++){
            todosOsServicos += this.listaDeServicos[i];
        }


        return this.listaDeServicos;
    }
}
