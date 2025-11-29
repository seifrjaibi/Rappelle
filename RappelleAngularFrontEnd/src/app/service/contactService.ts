import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Contact {
  id? : number;
  email : string;
  nom : string;

}


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url ='http://localhost:8080/api/contacts';

  constructor ( private http : HttpClient){}

 getAllContacts() : Observable <Contact[]>{
return this.http.get<Contact[]>(this.url);
  }
getContactById(id : number) :Observable<Contact>{
  return this.http.get<Contact>(`${this.url}/${id}`)
}
createOrUpdateContact(contact: Contact) : Observable<Contact>{
  return this.http.post<Contact>(this.url, contact);
}
delete(id : number): Observable<void>{
  return this.http.delete<void>(`${this.url}/${id}`)
}
SearchContacts(Keyword: string): Observable<Contact[]> {
  return this.http.get<Contact[]>(`${this.url}/search?Keyword=${Keyword}`); 
}
}
