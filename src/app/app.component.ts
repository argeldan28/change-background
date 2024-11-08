import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'change-background';

  bgColor: string[] = [
    '#8B4513',  
    '#6A5ACD', 
    '#D2691E',  
    '#3CB371',  
    '#FFD700',  
    '#FF6347',  
    '#4682B4',  
    '#2F4F4F',  
    '#FF4500',  
    '#B22222',  
  ];
  currentColor: string = '#808080';


  ngOnInit(): void 
  {
    document.body.style.backgroundColor = this.currentColor;
  }

  changeBackground() {
    
    const randomIndex = Math.floor(this.bgColor.length * Math.random());
    this.currentColor = this.bgColor[randomIndex]; 

    document.body.style.backgroundColor = this.currentColor;

    return this.currentColor;
  }
}
