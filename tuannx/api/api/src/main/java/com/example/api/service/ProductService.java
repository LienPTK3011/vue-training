package com.example.api.service;

import java.util.List;

import com.example.api.dto.ProductDto;
import com.example.api.dto.SearchDto;

public interface ProductService {
	public List<ProductDto> getAllProduct();
	public Boolean deleteProduct(Long id);
	public ProductDto getById (Long id);
	public ProductDto createOrUpdate(ProductDto productDto, Long id);
	public List<ProductDto>searchByDto(SearchDto dto);
}
