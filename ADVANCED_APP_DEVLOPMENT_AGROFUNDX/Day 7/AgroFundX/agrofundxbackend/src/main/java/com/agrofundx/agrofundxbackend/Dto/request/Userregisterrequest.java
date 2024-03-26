package com.agrofundx.agrofundxbackend.Dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Userregisterrequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String role;

}

