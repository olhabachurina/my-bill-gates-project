import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuotesComponent } from './quotes/quotes.component';
import { BiographyComponent } from './biography/biography.component';
import { ResourcesComponent } from './resources/resources.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    QuotesComponent,
    BiographyComponent,
    ResourcesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDarkTheme: boolean = false;  

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    console.log('Theme toggled:', this.isDarkTheme);
  }

  quotes: string[] = [
    '“Patience is a key element of success.”',
    '“If you think your teacher is tough, wait till you get a boss.”',
    '“Life is not fair — get used to it!”',
    '“Success is a lousy teacher. It seduces smart people into thinking they can’t lose.”',
    '“Be nice to nerds. Chances are you’ll end up working for one.”'
  ];
  
  resources: string[] = [
    'https://www.gatesnotes.com/',
    'https://www.microsoft.com/',
    'https://www.gatesfoundation.org/',
    'https://en.wikipedia.org/wiki/Bill_Gates'
  ];

  newQuote: string = '';
  newResource: string = '';

  addQuote() {
    if (this.newQuote.trim()) {
      this.quotes.push(this.newQuote);
      this.newQuote = '';
    }
  }

  addResource() {
    if (this.newResource.trim()) {
      this.resources.push(this.newResource);
      this.newResource = '';
    }
  }
}