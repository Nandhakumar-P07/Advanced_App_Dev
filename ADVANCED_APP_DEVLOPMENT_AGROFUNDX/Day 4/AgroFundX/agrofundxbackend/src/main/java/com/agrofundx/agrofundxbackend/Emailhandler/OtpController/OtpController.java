package com.agrofundx.agrofundxbackend.Emailhandler.OtpController;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.agrofundx.agrofundxbackend.Api.Api;
import com.agrofundx.agrofundxbackend.components.model.User;
import com.agrofundx.agrofundxbackend.Emailhandler.OtpService.OtpService;
import com.agrofundx.agrofundxbackend.components.repository.Userrepository;

@RestController
@CrossOrigin(value="*")
@RequestMapping(Api.AUTH)
public class OtpController {

  @Autowired
  private Userrepository userrepo;

  @Autowired
  private OtpService otpservice;

  @GetMapping("/otpcontroller")
  public String getOtpController()
  {
    return "welcome otp controller";
  }

  @PostMapping("/signup/sendotp")
    public ResponseEntity<?> sendOtpForSignUp(@RequestParam("email") String email,
            @RequestParam("name") String name) throws IOException {
      User storedUser=userrepo.findUserByEmail(email);
        if (storedUser==null) {
            try {
                String otp = generateRandomOtp();
          String emailotp = otpservice.sendOtpEmailForSignUp(email, name, otp);
          System.out.println(emailotp);
                return ResponseEntity.ok().body(emailotp);
            } catch (Exception e) {
                return ResponseEntity.ok().body(e.getMessage());
            }
        }
 return new ResponseEntity<>("User is already Signed up", HttpStatus.BAD_REQUEST);
}

 @PostMapping("/verifyemail/sendotp")
    public ResponseEntity<?> sendOtpForVerify(@RequestParam("email") String email) throws IOException {
      User storedUser=userrepo.findUserByEmail(email);
        if (storedUser!=null) {
            try {
                String otp = generateRandomOtp();
                String emailotp = otpservice.sendOtpEmailForVerify(email, otp);
                System.out.println(emailotp);
                return ResponseEntity.ok().body(emailotp);
            } catch (Exception e) {
                return ResponseEntity.ok().body(e.getMessage());
            }
        }
 return new ResponseEntity<>("User not available!", HttpStatus.BAD_REQUEST);
}

    private String generateRandomOtp() {
        return String.valueOf((int) (Math.random() * 900000) + 100000);
    }
}
