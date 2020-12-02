<?php

class OrdemservicosController extends AppController {
   public $helpers = ['Html', 'Js'];
   
   public function listar(){

   }

   public function trazerDados(){

      $this->autoRender = false;

      if($this->request->is('ajax')){
        
        $OrdensServico = $this->Ordemservico->find('all',['order' => ['Ordemservico.created desc']]);
        echo json_encode($OrdensServico);

    }

   }
   
   public function cadastrar(){
      if($this->request->is('post')){
        $this->autoRender = false;
        if($this->Ordemservico->save($this->request->data)){
            $mensagem = 'sucesso';
            echo json_encode($mensagem);
        } else {
            $mensagem = 'erro';
            echo json_encode($mensagem);
         }
      }
   }

   public function editar($id = null){
      $this->autoRender = false;

      if(!$id){
        return;
      }

      if($this->request->is('post')){
          
          $this->Ordemservico->id = $id;
          
          $osInformada = $this->Ordemservico->find('first', ['conditions' => ['id' => $id]]);

          $osInformada['Ordemservico']['descricao'] = $this->request->data['descricao'];

          //echo json_encode($osInformada); return false;

          if($this->Ordemservico->save($osInformada)){
            echo json_encode("edicao realizada");
          } else {
            echo json_encode("nao foi possivel editar");
          }
      }
   }

}

?>