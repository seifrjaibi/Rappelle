package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Contact;
import com.example.demo.repository.ContactRepository;
@Service
public class ContactService {
	@Autowired
	private ContactRepository contactRepository;

	public List<Contact> getAllContact() {
		return contactRepository.findAll();
	}

	public void deleteContactById(Long id) {
		contactRepository.deleteById(id);
	}
	
	public Contact SaveContact(Contact contact) {
		return contactRepository.save(contact);
	}
	public Contact getContactById (Long id) {
		return contactRepository.findById(id).orElse(null);
}
}
