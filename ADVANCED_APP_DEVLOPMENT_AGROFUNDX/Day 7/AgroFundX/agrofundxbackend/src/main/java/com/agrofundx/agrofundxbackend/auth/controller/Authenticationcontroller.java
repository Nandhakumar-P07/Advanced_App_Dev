package com.agrofundx.agrofundxbackend.auth.controller;

import org.apache.coyote.Response;

// import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agrofundx.agrofundxbackend.Api.*;
import com.agrofundx.agrofundxbackend.Dto.request.Authenticationrequest;
import com.agrofundx.agrofundxbackend.Dto.request.Userregisterrequest;
// import com.agrofundx.agrofundxbackend.Dto.response.Authenticationresponse;
import com.agrofundx.agrofundxbackend.auth.service.Authservice;
import com.agrofundx.agrofundxbackend.components.model.User;
import com.agrofundx.agrofundxbackend.components.serviceimplementation.Userserviceimpl;
import com.agrofundx.agrofundxbackend.auth.encryptpassword.Userpasswordencryptor;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class Authenticationcontroller {

  @Autowired
  private Authservice authService;

  @Autowired
  private Userserviceimpl userservice;


  @GetMapping("/home")
  public String Home() {
    return "Welcome user";
  }

  @PostMapping("/usersignup")
  public ResponseEntity<String> register(@RequestBody Userregisterrequest request) {
    boolean isRegistered = authService.userRegistration(request);
    return isRegistered ? ResponseEntity.ok("User registered successfully")
        : ResponseEntity.badRequest().body("User already Signed up!");
  }

  @PostMapping("/userlogin")
  public ResponseEntity<?> authenticate(@RequestBody Authenticationrequest request) {
    User storedUser=userservice.findUser(request.getEmail());
    if(storedUser!=null)
    {
      if(Userpasswordencryptor.matchPassword(request.getPassword(),storedUser.getPassword()))
      return ResponseEntity.ok(authService.userAuthentication(request));
    }
    return new ResponseEntity<>("Login Failed", HttpStatus.BAD_REQUEST);
  }

  @PutMapping("/updatepassword")
  public ResponseEntity<?> updatePassword(@RequestBody User user) {
    User storedUser = userservice.findUser(user.getEmail());
    if (storedUser == null) {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    } else if (Userpasswordencryptor.matchPassword(user.getPassword(), storedUser.getPassword())) {
      return new ResponseEntity<>("Unable to update!,It's your previous password", HttpStatus.BAD_REQUEST);
    } else {
      userservice.updateUser(storedUser, user.getPassword());
    }

    return ResponseEntity.ok().body("Password updated successfully");
  }

  @GetMapping("/usergetfaceimage/{email}")
  public ResponseEntity<?> getUserFaceImage(@PathVariable String email)
  {
      User storedUser=userservice.findUser(email);
      if(storedUser==null)
      {
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
      }
      String image=userservice.getUserFaceImage(storedUser);

      return  ResponseEntity.ok().body(image);
  }

  @PutMapping("/uploaduserfaceimage")
  public ResponseEntity<?> uploadUserImage(@RequestParam("email") String email,
      @RequestParam("userImage") String userImage) {
    try {

      User storedUser = userservice.findUser(email);

      if (storedUser == null) {
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
      } else {
        userservice.uploaduserImage(storedUser, userImage);
        return new ResponseEntity<>("Image uploaded successfully", HttpStatus.ACCEPTED);
      }
    } catch (Exception ex) {
      return new ResponseEntity<>("Error uploading image: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
