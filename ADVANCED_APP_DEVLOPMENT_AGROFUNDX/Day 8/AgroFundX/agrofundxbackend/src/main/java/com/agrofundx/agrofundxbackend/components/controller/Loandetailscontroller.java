package com.agrofundx.agrofundxbackend.components.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agrofundx.agrofundxbackend.Api.Api;
import com.agrofundx.agrofundxbackend.components.serviceimplementation.Loanserviceimpl;
import com.agrofundx.agrofundxbackend.components.model.LoanDetails;


@RestController
@CrossOrigin(value = "*")
@RequestMapping(Api.USER)
public class Loandetailscontroller{

    @Autowired
  private Loanserviceimpl loanservice;

    @GetMapping("/getloanbyid/{userId}")
  public LoanDetails findLoanById(@PathVariable String userId) {
    LoanDetails storedLoan = loanservice.getbyid(userId);
    return storedLoan;
  }



@PostMapping("/saveloandetails")
  public ResponseEntity<?> updateUserDetails(@RequestBody LoanDetails loan) {
      loanservice.savedata(loan);
    return new ResponseEntity<>("User details updated successfully", HttpStatus.OK);
  }
}
