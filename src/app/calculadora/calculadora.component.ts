import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  val1: number;
  val2: number;
  resultado: number;

  constructor() { }

  ngOnInit() {
  }
  public suma() {
    this.resultado = this.val1 + this.val2;
  }
  public resta() {
    this.resultado = this.val1 - this.val2;
  }
  public multiplicacion() {
    this.resultado = this.val1 * this.val2;
  }
  public division() {
    this.resultado = this.val1 / this.val2;
  }


}
