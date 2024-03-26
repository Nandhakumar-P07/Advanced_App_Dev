package com.agrofundx.agrofundxbackend.components.serviceimplementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agrofundx.agrofundxbackend.components.model.Usercarddetails;
import com.agrofundx.agrofundxbackend.components.repository.Usercarddetailsrepo;

@Service
public class Usercarddetailsserviceimpl {

   @Autowired
  private Usercarddetailsrepo usercardetailsrepo;

  public List<Usercarddetails> getAllUserCardDetails() {
    return usercardetailsrepo.findAll();
  }

  // public Usercarddetails findUserCardDetailsById(String id) {
  // return usercardetailsrepo(id);
  // }
  public void updateUserCardDetails(Usercarddetails storedUsercarddetails) {
  }

  public void deleteCardDetails(Usercarddetails usercarddetails) {

    usercardetailsrepo.delete(usercarddetails);
  }

  public Usercarddetails findById(String id) {
    return usercardetailsrepo.findById(id).get();
  }


}
