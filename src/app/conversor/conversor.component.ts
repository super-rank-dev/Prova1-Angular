import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
valorReal : number = 0.20;
valorDolar : number = 1;
valorEuro : number = 1.09;
valorPesoArgentino : number = 0.0047;
textBtn1 : string = "Moeda de conversão: ";
textBtn2 : string = "Moeda convertida: ";

valorCambio : number = 0;
valorConverter : number = 0;
valorConvertido : number = 0;

converter(){
  this.valorConvertido = this.valorConverter * this.valorCambio;
}

selecionarMoeda(moeda : number, campo : number){
  let moedaEscolhida : string = "";

  if(moeda == 1){
    moedaEscolhida = "Dólar";
  }
  else if(moeda == 2){
    moedaEscolhida = "Euro";
  }
  else if(moeda == 3){
    moedaEscolhida = "Real";
  }
  else if(moeda == 4){
    moedaEscolhida = "Peso Argentino";
  }
  else{
    alert('Erro de seleção de moeda');
  }

  if(campo == 1){
    this.textBtn1 = "Moeda de conversão: ";
    this.textBtn1 += moedaEscolhida;
  }
  else{
    this.textBtn2 = "Moeda convertida: ";
    this.textBtn2 += moedaEscolhida;
  }
}
}
