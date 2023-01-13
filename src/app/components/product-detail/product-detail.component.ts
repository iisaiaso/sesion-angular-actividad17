import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id = ""
  title:string = 'producto n°: '
  constructor(private router: Router, private route: ActivatedRoute, public prodServices: ProductosService) { }
  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'))

    // for (let data of this.prodServices.productos) {
    //   // this.array = data[0]
    //   // console.log(this.array)  
    //   if (data[0] == this.id) {
    //     console.log(data[0], data[1], data[2])
    //   }
    // }
    // // console.log(this.array)
  }
}
