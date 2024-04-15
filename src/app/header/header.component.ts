import { Component } from '@angular/core';
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BasketComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
