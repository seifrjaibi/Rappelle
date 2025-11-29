import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from '../../service/contactService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from '../../contact-form-component/contact-form-component';
@Component({
  selector: 'app-contact-list-component',
  standalone : true,
  imports: [CommonModule, NgbCarouselModule, ContactFormComponent, FormsModule],
  templateUrl: './contact-list-component.html',
styleUrls: ['./contact-list-component.css']})


export class ContactListComponent implements OnInit {


 contacts: Contact[] = [];
selectedContact: Contact | null = null;
showForm: boolean = false;// pour afficher ou masquer le formulaire

 constructor (public contactService: ContactService ){};






ngOnInit(): void {
   this.LoadContacts();
}

ShowUnshowForm(): void {
  this.showForm = true;
}


// afficher tous les contacts
LoadContacts(): void {
  this.contactService.getAllContacts().subscribe(data =>{this.contacts=data;} )
}
// stocker le contact à modifier pour l'envoyer au formulaire contact form component
EditContact(contact: Contact): void {
  this.selectedContact = contact; 
    this.showForm = true;

}
DeleteContact(id: number | undefined): void {
  if (id == null) {
    // Pas d'id, on ne peut pas supprimer
    console.warn('DeleteContact appelé sans id');
    return;
  }
  this.contactService.delete(id).subscribe(() => {
    this.LoadContacts(); // recharger la liste après suppression
  });
}

// gérer la soumission du formulaire de contact (ajout ou modification)
onSubmit(contact: Contact): void {
    // Appeler le service quel que soit le cas : ajout (id null) ou modification (id présent)
    this.contactService.createOrUpdateContact(contact).subscribe(() => {
      // Après la mise à jour/ajout côté backend, recharger la liste et réinitialiser la sélection
      this.LoadContacts();
      this.selectedContact = null;
      this.showForm = false; // masquer le formulaire après soumission
    });
    
}

Keyword: string = '';
searchContacts(keyword: string): void {
  const term = (keyword || '').trim();
  if (term === '') {
    // Si le mot-clé est vide, recharger tous les contacts
    this.LoadContacts();
    return;
  }
  // encoder le terme pour éviter les problèmes d'URL
  this.contactService.SearchContacts(encodeURIComponent(term)).subscribe({
    next: data => this.contacts = data,
    error: err => {
      console.error('Erreur recherche contacts', err);
      // en cas d'erreur on peut vider ou garder la liste courante; ici on recharge
      this.LoadContacts();
    }
  });
}

}
