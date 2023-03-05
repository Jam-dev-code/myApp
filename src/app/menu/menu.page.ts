import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  // Properties
  products: any;

  constructor(private route: Router) { }

  // Methods

  ngOnInit() {

    // Get the products from products.json
    fetch('../../assets/data/products.json')
      .then(res => {
        // Convert data to json format
        return res.json()
      })
      .then(res => {
        // Assign data result to products property
        this.products = res;
      });
  }

  // Custom Methods

  goToItem(id: any) {
    this.route.navigate(['/main/products/' + id]);
  }
}
