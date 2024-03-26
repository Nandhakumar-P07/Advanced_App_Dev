package com.agrofundx.agrofundxbackend.components.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrofundx.agrofundxbackend.components.model.Usercarddetails;

@Repository
public interface Usercarddetailsrepo  extends JpaRepository<Usercarddetails,String> {


}
