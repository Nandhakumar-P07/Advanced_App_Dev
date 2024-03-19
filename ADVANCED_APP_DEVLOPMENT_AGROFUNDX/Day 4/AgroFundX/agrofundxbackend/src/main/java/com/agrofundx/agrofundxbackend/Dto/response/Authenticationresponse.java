package com.agrofundx.agrofundxbackend.Dto.response;

import com.agrofundx.agrofundxbackend.components.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Authenticationresponse {
    private String token;
    private String firstName;
    private String email;
    private String id;
    private String lastName;
    private Role role;

}
