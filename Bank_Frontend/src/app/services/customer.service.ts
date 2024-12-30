import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',  // Ensure service is provided globally
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/customers';  // Your API URL

  constructor(private http: HttpClient) {}

  // Get list of customers
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new customer
  addCustomer(customer: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customer);
  }

  // Update an existing customer
  updateCustomer(id: number, customer: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, customer);
  }

  // Delete a customer
  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
