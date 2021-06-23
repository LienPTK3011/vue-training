package com.example.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.api.domain.Product;
import com.example.api.dto.ProductDto;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
	@Query("Select new com.example.api.dto.ProductDto(ed) from Product ed")
	List<ProductDto> getAll();

}
