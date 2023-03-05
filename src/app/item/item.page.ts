import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  // Properties
  product: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // Get the product id from the url
    // let productID = this.activatedRoute.snapshot.paramMap.get('id');
    let productID = this.activatedRoute.snapshot.params['id'];

    // Get the products from products.json file
    fetch('../../assets/data/products.json')
      .then(res => {

        // Convert data to json format
        return res.json()
      })
      .then(products => {
        
        // Find the product item in products
        let item = products.find((item: { id: string | null; }) => item.id == productID);
        
        console.log(item);

        // Store the item in product property
        this.product = item;
      });
  }

}
