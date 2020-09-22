import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DesafioService } from './desafio.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  desafiosAbertos: any[] = [];
  desafiosFechados: any[] = [];

  constructor(public desafioService: DesafioService, public router: Router) {
    this.listarDesafiosAbertos();
    this.listarDesafiosFechados();
  }

  listarDesafiosAbertos(){
    this.desafioService.listarDesafiosAbertos().subscribe(result => {
      console.log(result);
      this.desafiosAbertos = result.data;
    });
  }

  listarDesafiosFechados(){
    this.desafioService.listarDesafiosFechados().subscribe(result => {
      console.log(result);
      this.desafiosFechados = result.data;
    });
  }

goToDetalhes(id: any){
  this.router.navigate(['processo/' + id]);
}

}
