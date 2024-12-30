import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  standalone: true,
  imports: [
    FormsModule
  ],
  // Mark as standalone component
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  newCustomer = { name: '', email: '', balance: 0 };
  editingCustomer: any = null;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  addCustomer(): void {
    this.customerService.addCustomer(this.newCustomer).subscribe(() => {
      this.loadCustomers();
      this.newCustomer = { name: '', email: '', balance: 0 };
    });
  }

  updateCustomer(): void {
    if (this.editingCustomer) {
      this.customerService
        .updateCustomer(this.editingCustomer.id, this.editingCustomer)
        .subscribe(() => {
          this.loadCustomers();
          this.editingCustomer = null;
        });
    }
  }

  editCustomer(customer: any): void {
    this.editingCustomer = { ...customer };
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.loadCustomers();
    });
  }
}
