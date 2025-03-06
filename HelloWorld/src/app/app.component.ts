import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello From Bridgelabz!!!👋🏻';
  imageUrl = "assets/blz.png";
  url = "https://www.bridgelabz.com/";
  name = "Bridgelabz";

  ngOnInit(): void{
    this.title = "Hello From Bridgelabz!!!👋🏻";
  }

  onClick($event: MouseEvent): void{
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

}
