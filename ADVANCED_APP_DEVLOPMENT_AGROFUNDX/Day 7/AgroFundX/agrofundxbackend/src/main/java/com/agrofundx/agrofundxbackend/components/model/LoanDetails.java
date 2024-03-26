package com.agrofundx.agrofundxbackend.components.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "loandetails")
public class LoanDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private String id;
  private String type;
  private Date requestedDate;
  private Date approvedDate;
  private double loanAmount;
  private double duration;
  private int isEnabled;
}