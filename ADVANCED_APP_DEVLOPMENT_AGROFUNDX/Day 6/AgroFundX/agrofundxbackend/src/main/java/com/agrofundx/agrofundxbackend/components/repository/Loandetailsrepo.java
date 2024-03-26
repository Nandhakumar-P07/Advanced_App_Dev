package com.agrofundx.agrofundxbackend.components.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrofundx.agrofundxbackend.components.model.LoanDetails;

@Repository
public interface Loandetailsrepo extends JpaRepository<LoanDetails, String> {

  LoanDetails findLoanDetailsById(String id);
}