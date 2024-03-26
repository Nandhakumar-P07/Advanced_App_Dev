package com.agrofundx.agrofundxbackend.components.serviceimplementation;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.agrofundx.agrofundxbackend.components.repository.Loandetailsrepo;
import com.agrofundx.agrofundxbackend.components.repository.Userrepository;
import com.agrofundx.agrofundxbackend.components.model.LoanDetails;
import com.agrofundx.agrofundxbackend.components.model.User;

@Service
public class Loanserviceimpl {

  @Autowired
  private Loandetailsrepo loanrepo;

  @Autowired
  private Userrepository userrepo;

  public List<LoanDetails> getdata() {
    return loanrepo.findAll();
  }

  public LoanDetails getbyid(String id) {
    return loanrepo.findLoanDetailsById(id);
  }

  public LoanDetails savedata(LoanDetails data) {
    return loanrepo.save(data);
  }

  public boolean updateLoanDetails(LoanDetails data, String id) {
    User storedUser = userrepo.findUserById(id);
    if (storedUser == null) {
      return false;
    } else {
      List<LoanDetails> oldloandetails = storedUser.getUserloandetails();
      if (oldloandetails.size() > 2) {
        return false;
      }
      loanrepo.save(data);
      oldloandetails.add(data);
      storedUser.setUserloandetails(oldloandetails);
      userrepo.save(storedUser);
      return true;
    }
  }

public void authorizeLoan(LoanDetails storedloans, int status) {

    storedloans.setIsEnabled(status);
    loanrepo.save(storedloans);
  }

}