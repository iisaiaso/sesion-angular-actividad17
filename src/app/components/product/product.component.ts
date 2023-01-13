import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  array: any[] = []
  constructor(private router: Router, private route: ActivatedRoute, public prodServices: ProductosService) { }

  ngOnInit(): void {
  }
  editar(id: string) {
    this.router.navigate(['/detalle', id])
  }
}
