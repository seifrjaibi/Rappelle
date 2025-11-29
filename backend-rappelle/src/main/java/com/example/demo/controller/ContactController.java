package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Contact;
import com.example.demo.repository.ContactRepository;
import com.example.demo.service.ContactService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:4200") 

public class ContactController {

    private final ContactRepository contactRepository;
	@Autowired
	private ContactService contactService;

    ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

@GetMapping
public List<Contact> getAllContact() {
	return contactService.getAllContact();}
	
	@PostMapping
    public Contact SaveContact(@RequestBody Contact contact) {
		return contactService.SaveContact(contact);
	}
	
	@GetMapping("/{id}")
	public Contact getContactById (@PathVariable Long id) {
		return contactService.getContactById(id);
}
	
@DeleteMapping("/{id}")
public void deleteContactById(@PathVariable  Long id) {
	contactService.deleteContactById(id);
}

@GetMapping("/search")
public List searchContact(@RequestParam String Keyword) {
  return contactRepository.findByNomContainingIgnoreCase(Keyword);
}
	
}

