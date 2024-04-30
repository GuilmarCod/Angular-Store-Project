import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Store';
  products: any[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:5234/api/products?pageSize=50').subscribe((response: any) => {
      this.products = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
