import { Component } from '@angular/core';
import { CustomersComponent } from './customers/customers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Mark as standalone component
  imports: [CustomersComponent],  // Import CustomersComponent
})
export class AppComponent {
  title = 'bank-frontend';
}
