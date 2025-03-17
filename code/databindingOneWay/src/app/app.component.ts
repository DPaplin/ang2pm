import { Component } from '@angular/core';

@Component({
selector: 'app-root',
 templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDisabled:boolean = true
  arr:string[]=["prasad","shekhar","john","philip"]
  n = this.arr[0];
  i = 0;
  change() {
    this.i++;
    this.n = this.arr[ this.i ];
    if (this.i ==3) {
      this.i = -1;
      this.isDisabled=false
    }
  }












  //clickable:boolean =false;
  //n:string='Prasad';
  //imgUrl:string ='https://www.indiainputs.com/wp-content/uploads/2025/01/Shinchan.webp';
//change() {
  //if(this.n=="Prasad"){
    //this.n="Doremon";
   //this.imgUrl='https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg';
  //}
  //else {
    //this.n="Prasad";
  //this.imgUrl='https://www.indiainputs.com/wp-content/uploads/2025/01/Shinchan.webp ';
  //}
  
//}
}
