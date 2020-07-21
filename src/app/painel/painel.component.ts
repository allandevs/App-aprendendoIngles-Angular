import { Component, OnInit } from '@angular/core';
import { Frase} from '../shared/frase.model';
import { FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  
  public frases:Frase[] = FRASES
  public instrucao:string = " Traduza a frase:"
  public resposta: string = ""

  public rodada: number =0
  public rodadaFrase: Frase 
  public progresso: number = 0

  constructor() { 
    this.atualizaRodada()
  
   }

  ngOnInit(): void {
  }

  public atualizarResposta(resposta: Event){
  this.resposta = ( <HTMLInputElement>resposta.target).value
  }

  public verificarResposta(){
    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('a traducao esta correta') 
      this.rodada++
      this.progresso = this.progresso + (100/ this.frases.length)
     this.atualizaRodada()
      this.resposta =''

    } else{
      alert(' a traducao esta errada')
    }
    
    

  }
 public atualizaRodada(){
  this.rodadaFrase = this.frases[this.rodada]
 }

}
