import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search: string = '';

  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSearch() {
    if (this.search.trim()) {
    this.product.search.next(this.search);
      this.router.navigate(['/products'], {queryParams: {search: this.search} });
    }

  }
  resetSearch() {
    this.search = '';
    this.product.search.next('');
    this.router.navigate(['/products']);
  }

}
