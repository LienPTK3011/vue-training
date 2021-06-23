package com.example.api.service.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.example.api.domain.Product;
import com.example.api.dto.ProductDto;
import com.example.api.dto.SearchDto;
import com.example.api.repository.ProductRepository;
import com.example.api.service.ProductService;


@Service
public class ProductServiceImpl implements ProductService{
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	public EntityManager manager;
	@Override
	public List<ProductDto> getAllProduct() {
		List<ProductDto> listProduct = productRepository.getAll();
		return listProduct;
	}
	@Override
	public Boolean deleteProduct(Long id) {
		if(id != null) {
			Product product = productRepository.findById(id).get();
			productRepository.delete(product);
			return true;
		}
		return false;
	}
	@Override
	public ProductDto getById(Long id) {
		Product product = productRepository.findById(id).get();
		return new ProductDto(product);
	}
	@Override
	public ProductDto createOrUpdate(ProductDto productDto, Long id) {
		if(productDto != null) {
			Product product = null;
			if(productDto.getId() != null) {
				if(productDto.getId() != null && productDto.getId().equals(id)) {
					return null;
				}
				product=productRepository.findById(id).get();
			}
			if(product == null) {
				product = new Product();
			}
			product.setName(productDto.getName());
			product.setId_categories(productDto.getId_categories());
			product.setId_subcategories(productDto.getId_subcategories());
			product.setImage(productDto.getImage());
			product.setPrice(productDto.getPrice());
			product.setDescription(productDto.getDescription());
			product.setBest_seller(productDto.getBest_seller());
			product.setMeta_desc(productDto.getMeta_desc());
			product.setMeta_keyword(productDto.getMeta_keyword());
			product.setMeta_title(productDto.getMeta_title());
			product.setMrp(product.getMrp());
			product.setQty(productDto.getQty());
			product.setStatus(productDto.getStatus());
			product.setShort_desc(productDto.getShort_desc());
			product = productRepository.save(product);
			
			if(product != null) {
				return new ProductDto(product);
			}
		}
		return null;
	}
	
	@Override
	public List<ProductDto> searchByDto(SearchDto dto) {
		String whereClause = "";
		String orderBy = " ";
		String sqlCount = "select count(entity.id) from Product as entity where (1=1) ";
		String sql = "select new com.example.api.dto.ProductDto(entity) from Product as entity where (1=1) ";
		
		if (dto.getText() != null && StringUtils.hasText(dto.getText())) {
			whereClause += " AND (entity.name LIKE :text ) ";
		}
//        if (dto.getPrice() != null) {
//            whereClause += " AND (entity.price=:price ) ";
//        }
		sql += whereClause + orderBy;
		sqlCount += whereClause;
		Query q = manager.createQuery(sql, ProductDto.class);
		Query qCount = manager.createQuery(sqlCount);

		if (dto.getText() != null && StringUtils.hasText(dto.getText())) {
			q.setParameter("text", '%' + dto.getText().trim() + '%');
			qCount.setParameter("text", '%' + dto.getText().trim() + '%');
		}
//        if (dto.getPrice() != null) {
//            q.setParameter("price", dto.getPrice());
//            qCount.setParameter("price", dto.getPrice());
//        }
    
		List<ProductDto> entities = q.getResultList();
		return entities;
	
	}

}
