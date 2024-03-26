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
@Table(name = "shop")
public class Shopdetails {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private String id;
  private String productName;
  private String productCompany;
  private String productQuantity;
  private String productOffer;
  private String productSize;
  private String activeIngridients;
  private String productPrice;

}