import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessoService } from './processo.service';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.page.html',
  styleUrls: ['./processo.page.scss'],
})
export class ProcessoPage implements OnInit {


  constructor(public router: Router, private activatedRoute: ActivatedRoute, private processoService: ProcessoService) {
    console.log(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['/tabs']);
  }

  obterDesafio(id: any){
    this.processoService.listarDesafio(id).subscribe(result => {
      console.log(result);
    });
  }

}
