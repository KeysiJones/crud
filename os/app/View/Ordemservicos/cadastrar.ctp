<title>Cadastrar O.S</title>
<body>
<div style="display: none" id="telaCadastrar">
  <h1 class="text-center mt-4 mb-4">Cadastrar ordem de serviço</h1>
  <div class="formulario">
    <form method="post" id="formulario">
      <input type="hidden" name="_method" value="POST">
      <label for="CodOs">Cod</label>
      <input name="data[Ordemservico][cod]" type="text" class="form-control" id="CodOs" placeholder="Código da O.S"></INPUT>
      <label for="classificacaoOs">Classificação</label>
      <select name="data[Ordemservico][classificacao]" type="text" class="form-control" id="classificaoOs">
	       <option disabled selected>Selecione uma classificação</option>
      	 <option value="Bug">Bug</option>
	       <option value="Melhoria">Melhoria</option>
      </select>
      <div class="form-group">
          <label for="descricaoOs">Descrição</label>
          <textarea class="form-control" rows="3" name="data[Ordemservico][descricao]" id="descricaoOs" placeholder="Descrição da O.S"></textarea>
      </div>
      <input type="submit" value="cadastrar" class="btn btn-primary"></input>
    </form>
   </div>
   <div id="feedback" style="margin-top: 5px">
    <div class="loader" id="carregando" style="display: none"></div>
   </div>
</div>
</body>
</html>

