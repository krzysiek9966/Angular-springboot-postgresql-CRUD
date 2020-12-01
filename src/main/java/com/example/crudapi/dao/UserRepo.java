package com.example.crudapi.dao;

import com.example.crudapi.dao.entity.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    long deleteByUsername(String username);

    @Modifying
    @Query("UPDATE User u SET u.email = ?1, u.password = ?2 WHERE u.username = ?3")
    void updateByUsername(String email, String password, String username);

    @Modifying
    @Query("UPDATE User u SET u.email = ?1 WHERE u.username = ?2")
    void updateEmailByUsername(String email, String username);

    @Modifying
    @Query("UPDATE User u SET  u.password = ?1 WHERE u.username = ?2")
    void updatePasswordByUsername(String password, String username);


}
