package com.example.api.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.example.api.dto.ProductDto;
import com.example.api.dto.SearchDto;
import com.example.api.service.ProductService;

@RestController
@RequestMapping("/api/client")
@CrossOrigin("http://localhost:8080")
public class ProductRestController {
	@Autowired
	private ProductService productService;
	
	@RequestMapping(value = "/getAllProduct", method = RequestMethod.GET)
	public ResponseEntity<List<ProductDto>> getAllCategory() {
		List<ProductDto> result = productService.getAllProduct();
		return new ResponseEntity<List<ProductDto>>(result, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getById/{id}", method = RequestMethod.GET)
	public ResponseEntity<ProductDto> getById(@PathVariable Long id) {
		ProductDto result = productService.getById(id);
		return new ResponseEntity<ProductDto>(result, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<ProductDto> save(@RequestBody ProductDto dto) {
		ProductDto result = productService.createOrUpdate(dto, null);
		return new ResponseEntity<ProductDto>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<ProductDto> update(@RequestBody ProductDto dto, @PathVariable("id") Long id) {
		ProductDto result = productService.createOrUpdate(dto, id);
		return new ResponseEntity<ProductDto>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteById(@PathVariable("id") Long id) {
		Boolean result = productService.deleteProduct(id);
		return new ResponseEntity<Boolean>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	@RequestMapping(value = "/searchByDto", method = RequestMethod.POST)
    public ResponseEntity<List<ProductDto>> searchByDto(@RequestBody SearchDto dto) {
        List<ProductDto> result = productService.searchByDto(dto);
        return new ResponseEntity<List<ProductDto>>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }
}
