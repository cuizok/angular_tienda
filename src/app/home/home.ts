// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Producto } from '../services/product';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  productosDestacados: Producto[] = [];
  errorMessage = '';

  constructor(private productService: ProductService) {}

ngOnInit(): void {
  this.productService.getProductos().subscribe({
    next: (productos) => {
    this.productosDestacados = productos.slice(0, 4); 
    },
    error: (err) => {
      this.errorMessage = 'Error al cargar productos: ' + err.message;
    }
  });
}

}
