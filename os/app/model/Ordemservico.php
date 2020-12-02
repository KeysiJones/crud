<?php 

class Ordemservico extends AppModel {

   public $validate = [

   'descricao' => ['notBlank' => ['rule' => 'notBlank', 'message' => 'Este campo é obrigatório']],
	 'cod' => ['notBlank' => ['rule' => 'notBlank', 'message' => 'Este campo é obrigatório']],
   'classificacao' => ['notBlank' => ['rule' => 'notBlank', 'message' => 'Este campo é obrigatório']]
          
        ];
     }

?>