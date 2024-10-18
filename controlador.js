let inputEmail = document.getElementById('iptEmail');
let inputNome = document.getElementById('ipTNome');
let inputSenha = document.getElementById('iptSenha');
let buttonEntrar = document.getElementById ('btnEntrar');


let spanUsuario = document.getElementById('nomeUsuario');
let inputFoto = document.getElementById('iptFoto');
let inputDescricao = document.getElementById('iptDescricao');
let inputValor = document.getElementById('iptValor');
let buttonCadastrar = document.getElementById('btnCadastrar')


let container = document.getElementById('containerCards')


let pagina1 = document.getElementById('pagina1')
let pagina2 = document.getElementById('pagina2')


let listaDeServicos = new ListaDeServicos();
let usuario;


function quandoClicarNoBotaoEntrar(){
    if (formLogin.reportValidity()){    
   
        console.log(inputNome.value)


        usuario = new Usuario(
            inputEmail.value,
            inputNome.value,
            inputSenha.value
        );


        console.log (usuario);


        pagina1.classList.add("oculto");
        pagina2.classList.remove("oculto")


        spanUsuario.innerHTML = usuario.nome;
    }
}


let srcImagem;


function quandoCarregarArquivo(){
    const fileReader = new FileReader();
    const arquivos = inputFoto.files;  /* inputFoto é o nome da variável que armazena o input file */
   
    if (arquivos) {
        fileReader.onload = function (event) {
            srcImagem = event.target.result;
        }
        fileReader.readAsDataURL(arquivos[0]);
    }


}


inputFoto.addEventListener("change", quandoCarregarArquivo);


function quandoClicarNoBotaoCadastrar(){
    if(formCadastro.reportValidity()){
        console.log(inputDescricao.value)


            let servico1 = new Servico(
            srcImagem,
            inputDescricao.value,
            inputValor.value
        );


        listaDeServicos.adicionarServico(servico1);


        console.log (listaDeServicos.listarTodosOsServicos());


        desenharCards(listaDeServicos, container)


        formCadastro.reset();
    }
}


buttonEntrar.addEventListener('click', quandoClicarNoBotaoEntrar);
buttonCadastrar.addEventListener('click', quandoClicarNoBotaoCadastrar);
