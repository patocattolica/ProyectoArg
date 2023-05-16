import { Component} from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent{
  miportfolio:any;
  constructor(private datosPortfolio:PortfolioService){ }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.miportfolio=data;
    });
  }
}
