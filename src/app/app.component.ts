import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuotesComponent } from './quotes/quotes.component';
import { ResourcesComponent } from './resources/resources.component';
import { BiographyComponent } from './biography/biography.component';  
import { BoldDirective } from './bold.directive';  

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
    ResourcesComponent,
    BiographyComponent, 
    BoldDirective  
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(QuotesComponent) quotesComponent!: QuotesComponent;
  @ViewChild(ResourcesComponent) resourcesComponent!: ResourcesComponent;
  @ViewChild(BiographyComponent) biographyComponent!: BiographyComponent; 

  isDarkTheme: boolean = false; 

  activeSection: string | null = null;
  quotes: string[] = [
    '“Patience is a key element of success.”',
    '“If you think your teacher is tough, wait till you get a boss.”',
  ];

  resources: string[] = [
    'https://www.gatesnotes.com/',
    'https://www.microsoft.com/',
  ];

  newQuote: string = '';
  newResource: string = '';

  // Текст биографии
  biography: string = `
    Bill Gates (born October 28, 1955) is an American business magnate, software developer, investor, and philanthropist.
    He is best known as the co-founder of Microsoft Corporation...
  `;

  ngAfterViewInit() {
    this.quotesComponent.quotes = this.quotes;
    this.resourcesComponent.resources = this.resources;
    this.biographyComponent.biography = this.biography;  
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  addQuote() {
    if (this.newQuote.trim()) {
      this.quotes.push(this.newQuote);
      this.newQuote = '';
      if (this.quotesComponent) {
        this.quotesComponent.quotes = this.quotes;
      }
    }
  }

  addResource() {
    if (this.newResource.trim()) {
      this.resources.push(this.newResource);
      this.newResource = '';
      if (this.resourcesComponent) {
        this.resourcesComponent.resources = this.resources;
      }
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }
}