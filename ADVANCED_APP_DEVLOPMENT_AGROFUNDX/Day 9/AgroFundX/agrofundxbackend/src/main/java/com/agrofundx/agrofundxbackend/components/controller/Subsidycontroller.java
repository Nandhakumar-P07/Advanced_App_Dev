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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agrofundx.agrofundxbackend.components.serviceimplementation.Subsidyserviceimpl;
import com.agrofundx.agrofundxbackend.Api.Api;
import com.agrofundx.agrofundxbackend.components.model.Subsidy;


@RestController
@CrossOrigin(value = "*")
@RequestMapping(Api.AUTH)
public class Subsidycontroller{

@Autowired
private Subsidyserviceimpl subsidyservice;

@GetMapping("/getsubsidy")
public List<Subsidy> getSubsidy() {
    return subsidyservice.getdata();
}

@PostMapping("/savesubsidy/{id}")
  public ResponseEntity<?> saveSubsidyDetails(@RequestBody Subsidy sub,@PathVariable String id) {
    subsidyservice.savedata(sub,id);
    return new ResponseEntity<>("Subsidy details saved successfully", HttpStatus.OK);
  }

}