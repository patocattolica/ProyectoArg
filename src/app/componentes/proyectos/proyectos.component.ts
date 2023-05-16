import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  miportfolio:any;
  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miportfolio=data;
    });
  }

}
