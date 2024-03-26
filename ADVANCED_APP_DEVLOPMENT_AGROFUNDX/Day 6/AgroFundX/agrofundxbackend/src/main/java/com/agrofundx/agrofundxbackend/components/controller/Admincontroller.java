package com.agrofundx.agrofundxbackend.components.controller;

import java.util.*;

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

import com.agrofundx.agrofundxbackend.components.serviceimplementation.Loanserviceimpl;
import com.agrofundx.agrofundxbackend.Api.Api;
import com.agrofundx.agrofundxbackend.components.model.LoanDetails;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(Api.AUTH)
public class Admincontroller {

  @Autowired
  private Loanserviceimpl loanservice;

  @GetMapping("/homes")
  public String home() {
    return "home";
  }

  @PutMapping("/authorizeloan/{id}/{status}")
  public ResponseEntity<?> authorizeLoan(@PathVariable String id, @PathVariable int status) {

    LoanDetails storedloan = loanservice.getbyid(id);

    if (storedloan == null) {
      return new ResponseEntity<>("Campaigns not found", HttpStatus.NOT_FOUND);
    } else {
      loanservice.authorizeLoan(storedloan, status);
    }

    return new ResponseEntity<>("Campaign details updated successfully", HttpStatus.OK);

  }

  @GetMapping("/getloans")
  public List<LoanDetails> getAllUsers() {
    return loanservice.getdata();
  }

}