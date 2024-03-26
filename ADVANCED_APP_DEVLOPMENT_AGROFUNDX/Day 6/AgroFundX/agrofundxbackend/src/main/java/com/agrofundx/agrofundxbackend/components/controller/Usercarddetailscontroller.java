package com.agrofundx.agrofundxbackend.components.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrofundx.agrofundxbackend.Api.Api;
import com.agrofundx.agrofundxbackend.components.model.Usercarddetails;
import com.agrofundx.agrofundxbackend.components.serviceimplementation.Usercarddetailsserviceimpl;

@RestController
@CrossOrigin
@RequestMapping(Api.AUTH)
public class Usercarddetailscontroller {

  @Autowired
  private Usercarddetailsserviceimpl usercarddetailsserviceimpl;

  @GetMapping("/getallusercarddetails")
  public List<Usercarddetails> getAllUserCardDetails() {
    return usercarddetailsserviceimpl.getAllUserCardDetails();
  }

  @PostMapping("/saveusercarddetails")
  public ResponseEntity<?> saveUserCardDetails() {

    return new ResponseEntity<>("User card details saved successfully", HttpStatus.OK);
  }

  @DeleteMapping("/deleteusercard/{id}")
  public ResponseEntity<?> deleteUserCard(@PathVariable String id) {

    Usercarddetails storedUserCardDetails = usercarddetailsserviceimpl.findById(id);
    if (storedUserCardDetails == null) {
      return new ResponseEntity<>("Card not found", HttpStatus.NOT_FOUND);
    }
    usercarddetailsserviceimpl.deleteCardDetails(storedUserCardDetails);

    return new ResponseEntity<>("User card deleted successfully", HttpStatus.OK);
  }


}
