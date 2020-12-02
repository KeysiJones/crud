$(document).ready(function(){
	
	let date = new Date();
	let anoAtual = date.getFullYear()

	$("#copyright").html(`Todos os direitos reservados<br/> <strong>&copy;</strong> criado por <em>Keysi Jones</em> <br/>2020 - ${anoAtual}`)

      $.ajax({
        method: 'get',
	  	dataType: 'json',
	  	//data: $("#formulario").serialize(),
        url: "/os/ordemservicos/trazerdados",
	  	before: () => {
	  		console.log('aguarde...')
	  	},
	  	complete: console.log('completo'),
        success: (resposta) => {
			resposta.map((item, indice) => {

			$("#TabelaOs tbody").append
			(`
			  <tr>
			     <th scope="row">${item.Ordemservico.cod}</th>
			     <th scope="row">${item.Ordemservico.classificacao}</th>
			     <td id='descricao-${item.Ordemservico.id}'>${item.Ordemservico.descricao}</td>
			     <td>
			     	<button class="btn btn-primary description" id="editar-${item.Ordemservico.id}">Editar</button>
			     	<button class="btn d-none btn-warning description" id="salvar-${item.Ordemservico.id}">Salvar</button>
			     </td>
			  </tr>
		        `)

				let editarOrdemServico = document.getElementById(`editar-${item.Ordemservico.id}`)
				let salvarOrdemServico = document.getElementById(`salvar-${item.Ordemservico.id}`)

				let DescricaoOrdemServico = document.getElementById(`descricao-${item.Ordemservico.id}`)

				editarOrdemServico.addEventListener('click', (e) => {

    					DescricaoOrdemServico.innerHTML = `<textarea class="form-control" style='align: center' id="textarea-${item.Ordemservico.id}">${item.Ordemservico.descricao}</textarea>`;
    					editarOrdemServico.style.display = "none"
    					salvarOrdemServico.classList.remove('d-none')

  			});

				salvarOrdemServico.addEventListener('click', (e) => {
					
					let confirma = confirm(`Tem certeza que deseja atualizar a descrição da O.S ${item.Ordemservico.cod} ?`);

					if(confirma){

						let descricaoAtualizada = document.querySelector(`#textarea-${item.Ordemservico.id}`).value

	    				item.Ordemservico.descricao = descricaoAtualizada

	    				$.ajax({
	    					method: 'post',
	    					dataType: 'json',
	    					data: {
	    						descricao: descricaoAtualizada
	    					},
	    					url: `/os/ordemservicos/editar/${item.Ordemservico.id}`,
	    					before: console.log('before'),
	    					complete: console.log('complete'),
	    					success: (resposta) => console.log(resposta),
	    					error: (erro) => console.log(erro)
	    				})

					}

    				salvarOrdemServico.classList.add("d-none")
    				editarOrdemServico.style.display = "block"

    				DescricaoOrdemServico.innerHTML = `<td id='descricao-${item.Ordemservico.id}'>${item.Ordemservico.descricao}</td>`

    			})				
		})

		

			$('#TabelaOs').fadeIn();
	    },
        error: (erro) => console.log(erro),
      })

   });

