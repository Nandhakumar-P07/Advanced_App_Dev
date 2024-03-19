package com.agrofundx.agrofundxbackend.auth.service;


import com.agrofundx.agrofundxbackend.Dto.request.Authenticationrequest;
import com.agrofundx.agrofundxbackend.Dto.request.Userregisterrequest;
import com.agrofundx.agrofundxbackend.Dto.response.Authenticationresponse;



public interface Authservice {
  boolean userRegistration(Userregisterrequest request);

  Authenticationresponse userAuthentication(Authenticationrequest request);

}
