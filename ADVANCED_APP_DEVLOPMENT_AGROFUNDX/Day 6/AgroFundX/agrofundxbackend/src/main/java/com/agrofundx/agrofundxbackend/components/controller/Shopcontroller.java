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
import com.agrofundx.agrofundxbackend.components.serviceimplementation.Shopdetailsserviceimpl;
import com.agrofundx.agrofundxbackend.components.model.Shopdetails;


@RestController
@CrossOrigin(value = "*")
@RequestMapping(Api.USER)
public class Shopcontroller{

    @Autowired
private Shopdetailsserviceimpl subsidyservice;

    @GetMapping("/getshop")
public List<Shopdetails> getSubsidy() {
    return subsidyservice.getdata();
}

@PostMapping("/saveshop")
  public ResponseEntity<?> saveSubsidyDetails(@RequestBody Shopdetails shop) {
    subsidyservice.savedata(shop);
    return new ResponseEntity<>("Subsidy details saved successfully", HttpStatus.OK);
  }

}