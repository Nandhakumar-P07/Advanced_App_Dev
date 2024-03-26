package com.agrofundx.agrofundxbackend.components.serviceimplementation;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.agrofundx.agrofundxbackend.components.repository.Shopdetailsrepo;
import com.agrofundx.agrofundxbackend.components.model.Shopdetails;

@Service
public class Shopdetailsserviceimpl{

    @Autowired
private Shopdetailsrepo shoprepo;

public List<Shopdetails> getdata(){
    return shoprepo.findAll();
}

public Shopdetails savedata(Shopdetails sub){
    return shoprepo.save(sub);
}

public Shopdetails updatedata(Shopdetails sub,String id){
 sub.setId(id);
return shoprepo.save(sub);
}

public void deletedata(String id){
shoprepo.deleteById(id);
}

}