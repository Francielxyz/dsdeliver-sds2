package com.devsupeiro.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsupeiro.dsdeliver.entities.Order;

public interface OrderRepository  extends JpaRepository<Order, Long>{
	
	
}
