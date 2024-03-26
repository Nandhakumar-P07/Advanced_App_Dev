package com.agrofundx.agrofundxbackend.components.controller;

import java.lang.reflect.Field;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agrofundx.agrofundxbackend.Api.Api;
import com.agrofundx.agrofundxbackend.components.model.User;
import com.agrofundx.agrofundxbackend.components.model.Usercarddetails;
import com.agrofundx.agrofundxbackend.components.model.LoanDetails;
import com.agrofundx.agrofundxbackend.components.serviceimplementation.Userserviceimpl;
import com.agrofundx.agrofundxbackend.components.serviceimplementation.Loanserviceimpl;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(Api.USER)
public class Usercontroller {

  @Autowired
  private Userserviceimpl userservice;

  @Autowired
  private Loanserviceimpl loanservice;

  @PutMapping("/uploaduserprofileimage")
  public ResponseEntity<?> uploadUserProfileImage(@RequestParam("email") String email,
      @RequestParam("userProfileImage") String userProfileImage) {
    try {

      User storedUser = userservice.findUser(email);

      if (storedUser == null) {
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
      } else {
        userservice.uploadUserProfileImage(storedUser, userProfileImage);
        return new ResponseEntity<>("Image uploaded successfully", HttpStatus.ACCEPTED);
      }
    } catch (Exception ex) {
      return new ResponseEntity<>("Error uploading image: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/uploaduserimage")
  public ResponseEntity<?> uploadUserImage(@RequestParam("email") String email,
      @RequestParam("userImage") String userImage) {
    try {
      User storedUser = userservice.findUser(email);

      if (storedUser == null) {
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
      } else {
        userservice.uploaduserImage(storedUser, userImage);
        return new ResponseEntity<>("Image uploaded successfully",
            HttpStatus.ACCEPTED);
      }
    } catch (Exception ex) {
      return new ResponseEntity<>("Error uploading image: " + ex.getMessage(),
          HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/getuser/{userId}")
  public User findUserById(@PathVariable String userId) {
    User storedUser = userservice.findUserById(userId);
    return storedUser;
  }

  @GetMapping("/getusers")
  public List<User> getAllUsers() {
    return userservice.getAllUsers();
  }

  @DeleteMapping("/deleteuser/{id}")
  public ResponseEntity<?> deleteUserById(@PathVariable String id) {

    User storedUser = userservice.findUserById(id);
    if (storedUser == null) {
      return new ResponseEntity<>("User not exist with this " + id + "!", HttpStatus.NOT_FOUND);
    } else {
      userservice.deleteUser(storedUser);
    }

    return new ResponseEntity<>("User with id " + id + " is deleted successfully", HttpStatus.OK);
  }

  @PutMapping("/updateuserdetails")
  public ResponseEntity<?> updateUserDetails(@RequestBody User user) {

    User storedUser = userservice.findUser(user.getEmail());
    if (storedUser == null) {
      return new ResponseEntity<>("User with email " + user.getEmail() + " not found", HttpStatus.NOT_FOUND);
    } else {
      userservice.updateUserDetails(storedUser);
    }

    return new ResponseEntity<>("User details updated successfully", HttpStatus.OK);
  }

  @PutMapping("/updateuserdetailsbyId/{id}")
  public ResponseEntity<?> updateUserDetailsById(@PathVariable String id, @RequestBody User user) {
    User storedUser = userservice.findUserById(id);

    if (storedUser == null) {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    } else {
      updateUserFields(storedUser, user);
      userservice.updateUserDetails(storedUser);
    }

    return new ResponseEntity<>("User details updated successfully", HttpStatus.OK);
  }

  private void updateUserFields(User storedUser, User newUser) {
    Class<?> userClass = User.class;
    Field[] fields = userClass.getDeclaredFields();

    for (Field field : fields) {
      try {
        field.setAccessible(true);
        Object newValue = field.get(newUser);
        if (newValue != null) {
          field.set(storedUser, newValue);
        }
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      }
    }
  }

  @PutMapping("/updateusercarddetails/{id}")
  public ResponseEntity<?> updateUserCardDetails(@RequestBody Usercarddetails usercarddetails,
      @PathVariable String id) {

    boolean result = userservice.updateUserCardDetails(usercarddetails, id);
    if (result) {
      return new ResponseEntity<>("User card details updated successfully", HttpStatus.OK);
    } else {

      return new ResponseEntity<>("Unable to update usercarddetails", HttpStatus.BAD_REQUEST);
    }

  }

  @PutMapping("/updateloandetails/{id}")
  public ResponseEntity<?> updateLoanDetails(@RequestBody LoanDetails loandetails,
      @PathVariable String id) {

    boolean result = loanservice.updateLoanDetails(loandetails, id);
    if (result) {
      return new ResponseEntity<>("User card details updated successfully", HttpStatus.OK);
    } else {

      return new ResponseEntity<>("Unable to update usercarddetails", HttpStatus.BAD_REQUEST);
    }

  }

}
