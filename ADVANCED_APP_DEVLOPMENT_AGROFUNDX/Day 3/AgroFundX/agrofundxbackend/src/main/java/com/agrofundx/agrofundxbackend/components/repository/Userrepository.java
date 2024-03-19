package com.agrofundx.agrofundxbackend.components.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrofundx.agrofundxbackend.components.model.User;


@Repository
public interface Userrepository extends JpaRepository<User,String>{


  User findUserByEmail(String email);
Optional<User> findByEmail(String email);
  User findUserById(String id);


}
