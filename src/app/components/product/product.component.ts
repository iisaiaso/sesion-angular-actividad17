import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productos = [
    [1,'Galleta chokis',10.00,15.00,5,100.00],
    [2,'Mermelada Fresa',10.00,15.00,5,100.00],
    [3,'Aceite',10.00,15.00,5,100.00],
    [4,'Palomita de Maiz',10.00,15.00,5,100.00],
    [5,'Doritos',10.00,15.00,5,100.00]
  ]
}
