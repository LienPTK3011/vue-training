package com.example.api.dto;

import com.example.api.domain.Product;

public class ProductDto {
	private Long id;
	private int id_categories;
	private int id_subcategories;
	private String name;
	private String image;
	private float mrp;
	private float price;
	private int qty;
	private String short_desc;
	private String description;
	private int best_seller;
	private String meta_title;
	private String meta_desc;
	private String meta_keyword;
	private int status;
	
	public ProductDto() {
		super();
	}
	
	public ProductDto(Product product) {
		if(product!= null) {
			this.setId(product.getId());
			this.name= product.getName();
			this.image=product.getImage();
			this.mrp=product.getMrp();
			this.price=product.getPrice();
			this.qty=product.getQty();
			this.description=product.getDescription();
			this.status=product.getStatus();
			this.id_categories=product.getId_categories();
			this.id_subcategories=product.getId_subcategories();
			this.meta_desc=product.getMeta_desc();
			this.meta_keyword=product.getMeta_keyword();
			this.best_seller = product.getBest_seller();
			this.meta_title= product.getMeta_title();
			this.short_desc=product.getShort_desc();
		}
	}
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
	public String getShort_desc() {
		return short_desc;
	}
	public void setShort_desc(String short_desc) {
		this.short_desc = short_desc;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getBest_seller() {
		return best_seller;
	}
	public void setBest_seller(int best_seller) {
		this.best_seller = best_seller;
	}
	public String getMeta_title() {
		return meta_title;
	}
	public void setMeta_title(String meta_title) {
		this.meta_title = meta_title;
	}
	public String getMeta_desc() {
		return meta_desc;
	}
	public void setMeta_desc(String meta_desc) {
		this.meta_desc = meta_desc;
	}
	public String getMeta_keyword() {
		return meta_keyword;
	}
	public void setMeta_keyword(String meta_keyword) {
		this.meta_keyword = meta_keyword;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
}
