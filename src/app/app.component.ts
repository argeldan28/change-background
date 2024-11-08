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
    '#8B4513',  // SaddleBrown (marrone caldo)
    '#6A5ACD',  // SlateBlue (blu lavanda)
    '#D2691E',  // Chocolate (cioccolato)
    '#3CB371',  // MediumSeaGreen (verde mare)
    '#FFD700',  // Gold (oro)
    '#FF6347',  // Tomato (rosso corallo)
    '#4682B4',  // SteelBlue (blu acciaio)
    '#2F4F4F',  // DarkSlateGray (grigio scuro)
    '#FF4500',  // OrangeRed (rosso aranciato)
    '#B22222',  // FireBrick (mattoni ardenti)
  ];
  currentColor: string = 'gray';


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
