import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // <-- agrega esto
import { ProductService, Producto } from '../services/product';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],  // aquí lo añades
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent implements OnInit {
  productos: Producto[] = [];
  searchText: string = '';
  selectedCategory: string = 'all';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductos().subscribe({
      next: (data) => (this.productos = data),
      error: () => console.error('Error al cargar productos')
    });
  }

  get filteredProductos(): Producto[] {
    return this.productos.filter(p => {
      const matchesName = p.nombre.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory =
        this.selectedCategory === 'all' || p.categoriaId === +this.selectedCategory;
      return matchesName && matchesCategory;
    });
  }
}
