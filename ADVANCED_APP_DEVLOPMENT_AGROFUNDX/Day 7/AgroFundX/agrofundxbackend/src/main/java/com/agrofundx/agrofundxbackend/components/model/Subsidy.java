package com.agrofundx.agrofundxbackend.components.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;

import jakarta.persistence.CascadeType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "subsidy")
public class Subsidy {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private String id;
  private String type;
  private String amount;
  private String maxLand;
  private String maxIncome;
  private List<String> crops;
  private Date dateOfRelease;
  private Long maxBeneficiary;
  private Long currentbeneficiary;
  private int loanCoveragePercent;
  private int loanCoverageAmount;

  @OneToMany(cascade = CascadeType.ALL)
  @JoinColumn(name = "JoinColumn_user_id", referencedColumnName = "id")
  private List<User> beneficiary;
}