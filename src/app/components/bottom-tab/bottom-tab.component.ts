import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-tab',
  templateUrl: './bottom-tab.component.html',
  styleUrls: ['./bottom-tab.component.scss'],
})
export class BottomTabComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  goToHome() {
    this.router.navigate(['/home']);
  }
  goToMenu() {
    this.router.navigate(['/menu']);
  }
  goToContacts() {
    this.router.navigate(['/contacts']);
  }

}