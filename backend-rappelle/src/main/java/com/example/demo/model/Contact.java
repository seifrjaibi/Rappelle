package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String email;
	private String nom;

	// constructeur vide pour java puisse instancier des instance automatiaquement
	public Contact() {
		// TODO Auto-generated constructor stub
	}

// constructeur parametrer pour qu'on puisse instanceier ce qu'on veut
	public Contact(String email, String nom) {

		this.email = email;
		this.nom = nom;
	}

//getters and setters 

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
