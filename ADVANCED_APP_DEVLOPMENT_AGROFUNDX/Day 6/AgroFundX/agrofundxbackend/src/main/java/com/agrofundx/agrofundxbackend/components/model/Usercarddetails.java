package com.agrofundx.agrofundxbackend.components.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="usercarddetails")

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usercarddetails {


  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private String id;
  private String cardNumber;
  private String cardName;
  private String cardYear;
  private String cardMonth;
  private int cardCvv;

}


