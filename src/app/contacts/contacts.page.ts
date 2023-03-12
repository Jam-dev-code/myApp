import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
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