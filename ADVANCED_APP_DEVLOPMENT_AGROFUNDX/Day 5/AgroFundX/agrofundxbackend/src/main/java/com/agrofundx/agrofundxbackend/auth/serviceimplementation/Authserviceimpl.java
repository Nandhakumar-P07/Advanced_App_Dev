package com.agrofundx.agrofundxbackend.auth.serviceimplementation;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.agrofundx.agrofundxbackend.Dto.request.Authenticationrequest;
import com.agrofundx.agrofundxbackend.Dto.request.Userregisterrequest;
import com.agrofundx.agrofundxbackend.Dto.response.Authenticationresponse;
import com.agrofundx.agrofundxbackend.components.model.User;
import com.agrofundx.agrofundxbackend.components.model.enumerate.Role;
import com.agrofundx.agrofundxbackend.components.repository.Userrepository;
import com.agrofundx.agrofundxbackend.auth.service.Authservice;
import com.agrofundx.agrofundxbackend.springauth.Util.Jwtutil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;



@Service
@Transactional
@RequiredArgsConstructor
public class Authserviceimpl implements Authservice{


    private final Userrepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final Jwtutil jwtUtil;

    @Override
    public boolean userRegistration(Userregisterrequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .firstName(request.getFirstName())
                    .lastName(request.getLastName())
                    .email(request.getEmail())
                 .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public Authenticationresponse userAuthentication(Authenticationrequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return Authenticationresponse.builder()
                .token(token)
                .id(user.getId())
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .role(user.getRole())
                .build();
    }


}
