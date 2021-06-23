package com.example.api.dto;

public class SearchDto {
	private Long id;
	private int id_categories;
	private int id_subcategories;
	private String name;
	private String image;
	private float mrp;
	private float price;
	private int qty;
	private int status;
	private String text;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public int getId_categories() {
		return id_categories;
	}
	public void setId_categories(int id_categories) {
		this.id_categories = id_categories;
	}
	public int getId_subcategories() {
		return id_subcategories;
	}
	public void setId_subcategories(int id_subcategories) {
		this.id_subcategories = id_subcategories;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public float getMrp() {
		return mrp;
	}
	public void setMrp(float mrp) {
		this.mrp = mrp;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
	
}
