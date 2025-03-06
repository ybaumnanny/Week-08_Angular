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
  userName: string ="";
  nameError: string = "";

  ngOnInit(): void{
    this.title = "Hello From Bridgelabz!!!👋🏻";
  }

  onClick($event: MouseEvent): void{
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  onInput(): void{
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
    }
    else{
    this.nameError = "Name is Incorrect!";
  }
 }
}
