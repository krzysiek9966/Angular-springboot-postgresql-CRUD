package com.example.crudapi.api;

import com.example.crudapi.dao.entity.User;
import com.example.crudapi.manager.UserManager;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserApi {

    private UserManager users;

    public UserApi(UserManager users) {
        this.users = users;
    }

    @GetMapping("/getAll")
    public Iterable<User> getAll(){
        return users.findAll();
    }

    @GetMapping("/getById")
    public Optional<User> getById(@RequestParam Long index){
        return users.find(index);
    }

    @PostMapping("/add")
    public String addUser(@RequestBody User user){
        users.save(user);
        return "Hi " + user.getUsername() + " your Registration process successfully completed";
    }

    @PutMapping("/update")
    public User updateUser(@RequestBody User user){
        return users.save(user);
    }

    @DeleteMapping("/deleteById")
    public void deleteUser(@RequestParam Long index){
        users.deleteById(index);
    }

    @DeleteMapping("/deleteByUsername")
    public Long deleteByUsername(@RequestParam String username){
        return users.deleteByUsername(username);
    }

}
