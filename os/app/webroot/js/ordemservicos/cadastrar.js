$(document).ready(function(){

  let erroCod = ""
  let erroClassificacao = "" 
  let erroDescricao = ""

  console.log(erroDescricao, erroCod, erroClassificacao)
  
  const mostrarErros = () => {

            $("#feedback").html(
              `<div class='alert alert-danger'>Verifique as mensagens abaixo: <span data-dismiss='alert' class='close'>&times</span>
                ${erroCod ? '<br/> - ' + erroCod : ''}
                ${erroClassificacao ? '<br/> - ' + erroClassificacao : ''}
                ${erroDescricao ? '<br/> - ' + erroDescricao : ''}
              </div>`)
  }
  
  $.ajax({
       method: 'get',
        //dataType: 'json',
        //data: $("#formulario").serialize(),
        url: "/os/ordemservicos/cadastrar",
        before: (resposta) => console.log('before'),
        complete: (resposta) => console.log('complete'),
        success: (resposta) => {
          $("#telaCadastrar").fadeIn()
          $("#dados").html(resposta)
        },
        error: (erro) => console.log('erro ' + erro),
    })

    $("#formulario").submit((e) => {

        erroCod = ""
        erroClassificacao = "" 
        erroDescricao = ""

      if($("#CodOs").val() == ''){
        erroCod = "Informe o código da O.S !"
      }

      if(document.querySelector("#classificaoOs").value == 'Selecione uma classificação'){
        console.log("erro na classificação")
        erroClassificacao = "Informe a classificação !"
      }

      if($("#descricaoOs").val() == ''){
        erroDescricao = "Informe a descrição !"
      }
      
      $("#carregando").fadeIn();

      e.preventDefault();

      $.ajax({
        method: 'post',
        //dataType: 'json',
        data: $("#formulario").serialize(),
        url: "/os/ordemservicos/cadastrar",
        before: () => $("#carregando").fadeIn(),
        complete: console.log('complete'),
        success: (resposta) => {

          console.log(resposta)

          $("#carregando").fadeOut()

          console.log(erroCod,erroClassificacao,erroDescricao)

          if(erroCod == '' && erroClassificacao == '' && erroDescricao == ''){

            $("div.formulario input[type='text']").val('')
            $("div.formulario textarea").val('')
            $("div.formulario select").val('<option disabled="" selected="">Selecione uma classificação</option>')
            $("#feedback").html("<div class='alert alert-success'>O.S cadastrada com sucesso <span data-dismiss='alert' class='close'>&times</span></div>")

          } else { 

            $("#feedback").html(
              `<div class='alert alert-danger'>Verifique as mensagens abaixo: <span data-dismiss='alert' class='close'>&times</span>
                ${erroCod ? '<br/> - ' + erroCod : ''}
                ${erroClassificacao ? '<br/> - ' + erroClassificacao : ''}
                ${erroDescricao ? '<br/> - ' + erroDescricao : ''}
              </div>`)

          }
            
        },
        error: (erro) => {

            $("#feedback").html(
              `<div class='alert alert-danger'>Verifique as mensagens abaixo: <span data-dismiss='alert' class='close'>&times</span>
                ${erroCod ? '<br/> - ' + erroCod : ''}
                ${erroClassificacao ? '<br/> - ' + erroClassificacao : ''}
                ${erroDescricao ? '<br/> - ' + erroDescricao : ''}
              </div>`)

        }
      })
    })

  });