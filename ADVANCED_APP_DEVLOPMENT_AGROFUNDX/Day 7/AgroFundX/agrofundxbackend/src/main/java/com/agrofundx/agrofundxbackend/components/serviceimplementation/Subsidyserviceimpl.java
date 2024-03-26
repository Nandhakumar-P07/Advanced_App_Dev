package com.agrofundx.agrofundxbackend.components.serviceimplementation;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.agrofundx.agrofundxbackend.components.repository.Subsidydetailsrepo;
import com.agrofundx.agrofundxbackend.components.model.Subsidy;
import com.agrofundx.agrofundxbackend.components.repository.Userrepository;
import com.agrofundx.agrofundxbackend.components.model.User;

@Service
public class Subsidyserviceimpl{

    @Autowired
private Subsidydetailsrepo subsidyrepo;
    @Autowired
private Userrepository userrepo;

public List<Subsidy> getdata(){
    return subsidyrepo.findAll();
}

public Subsidy savedata(Subsidy sub,String id){
List<User> oldusers = sub.getBeneficiary();
User newuser = userrepo.findUserById(id);
oldusers.add(newuser);
    sub.setBeneficiary(oldusers);
    return subsidyrepo.save(sub);
}

public Subsidy updatedata(Subsidy sub,String id){
 sub.setId(id);
return subsidyrepo.save(sub);
}

public void deletedata(String id){
subsidyrepo.deleteById(id);
}

}