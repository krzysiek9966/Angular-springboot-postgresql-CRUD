package com.example.crudapi.manager;

import com.example.crudapi.dao.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;
import com.example.crudapi.dao.UserRepo;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserManager {

    private UserRepo userRepo;

    @Autowired
    public UserManager(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public Optional<User> find(Long id){
        return userRepo.findById(id);
    }

    public Iterable<User> findAll(){
        return userRepo.findAll();
    }

    public User save(User user){
        return userRepo.save(user);
    }

    public void deleteById(Long id){
        userRepo.deleteById(id);
    }

    @Transactional
    public Long deleteByUsername(String username){
        return userRepo.deleteByUsername(username);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void fillDB() {
//        save(new User(7L,"ewe", "e@gmail.com", "ewe"));   //Dodanie rekordu przy uruchomieniu
    }
}
