import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio'; 
}
