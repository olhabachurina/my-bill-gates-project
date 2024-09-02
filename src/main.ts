import { bootstrapApplication } from '@angular/platform-browser';
import { BillGatesComponent } from './app/bill-gates/bill-gates.component';

bootstrapApplication(BillGatesComponent)
  .catch(err => console.error(err));
