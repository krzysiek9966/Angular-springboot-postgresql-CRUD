package com.example.crudapi.dao;

import com.example.crudapi.dao.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    long deleteByUsername(String username);
}
