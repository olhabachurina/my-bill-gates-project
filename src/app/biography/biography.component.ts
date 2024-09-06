import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biography',
  standalone: true,  // Добавляем standalone
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent {
  @Input() biography: string = '';  
}