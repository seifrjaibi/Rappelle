import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../service/contactService';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form-component.html',
  styleUrls: ['./contact-form-component.css'],
})
export class ContactFormComponent {
  // Reçoit un contact à modifier depuis le parent (peut être nul)
  @Input() contact: Contact | null = null;
  // Émet le contact soumis vers le parent
  @Output() submitForm = new EventEmitter<Contact>();


  // Groupe de champs du formulaire
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Les clés doivent correspondre aux formControlName utilisés dans le template
    this.form = this.fb.group({
      id : [null],// pour differentier creation et modification
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
ngOnChanges() {
  if (this.contact) {
    // Si un contact est fourni, pré-remplir le formulaire pour la modification
    this.form.patchValue(this.contact);
  }
}
  onSubmit() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value); //envoie les données au parent

      this.form.reset();// // nettoie le formulaire apres soumission
      this.form.reset({id: null});// remet id a null apres soumission pour creation

    }
  }




}
