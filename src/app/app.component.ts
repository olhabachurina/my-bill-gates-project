import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BillGatesComponent } from './bill-gates/bill-gates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,           
    BillGatesComponent      
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
