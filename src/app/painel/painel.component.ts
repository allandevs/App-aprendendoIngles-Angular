import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase} from '../shared/frase.model';
import { FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {
  
  public frases:Frase[] = FRASES
  public instrucao:string = " Traduza a frase:"
  public resposta: string = ""

  public rodada: number =0
  public rodadaFrase: Frase 
  public progresso: number = 0

  public tentativas:number = 3;

 @Output() public encerrarJogo = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  
   }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    console.log('Componente painel foi dstruido')
  }
  public atualizarResposta(resposta: Event){
  this.resposta = ( <HTMLInputElement>resposta.target).value
  }

  public verificarResposta(){
    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('a traducao esta correta') 
      this.rodada++
      this.progresso = this.progresso + (100/ this.frases.length)
      
      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria')
      }

     this.atualizaRodada()
      this.resposta =''

    } else{
      this.tentativas--
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
      }
      
    }
    
    

  }
 public atualizaRodada(){
  this.rodadaFrase = this.frases[this.rodada]
 }

}
