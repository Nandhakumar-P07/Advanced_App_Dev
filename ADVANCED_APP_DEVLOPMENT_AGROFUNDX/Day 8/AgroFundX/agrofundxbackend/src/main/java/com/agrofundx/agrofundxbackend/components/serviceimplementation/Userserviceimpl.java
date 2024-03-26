package com.agrofundx.agrofundxbackend.components.serviceimplementation;

// import java.util.Collections;
// import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.agrofundx.agrofundxbackend.Dto.Userdto;
import com.agrofundx.agrofundxbackend.components.model.User;
import com.agrofundx.agrofundxbackend.components.model.Usercarddetails;
import com.agrofundx.agrofundxbackend.components.model.enumerate.Role;
import com.agrofundx.agrofundxbackend.components.repository.Usercarddetailsrepo;
import com.agrofundx.agrofundxbackend.components.repository.Userrepository;
import com.agrofundx.agrofundxbackend.auth.encryptpassword.Userpasswordencryptor;

// import jakarta.transaction.Transactional;

@Service
public class Userserviceimpl {

  @Autowired
  private Userrepository userrepo;

  @Autowired
  private Usercarddetailsrepo usercarddetailsrepo;

  public User findUser(String email) {
    User user = userrepo.findUserByEmail(email);
    return user;
  }

  public void signupUser(User user) {
    // String id = UUID.randomUUID().toString();
    // user.setId(id);
    String password = Userpasswordencryptor.encryptPassword(user.getPassword());
    user.setPassword(password);
    userrepo.save(user);
  }

  public Userdto loginUser(User user) {

    User storedUser = userrepo.findUserByEmail(user.getEmail());

    if (storedUser != null) {
      if (Userpasswordencryptor.matchPassword(user.getPassword(), storedUser.getPassword())) {

        Userdto userdto = new Userdto();

        BeanUtils.copyProperties(storedUser, userdto, "password");

        return userdto;
      }
    }

    return null;

  }

  public void updateUser(User user, String password) {
    String updatedpassword = Userpasswordencryptor.encryptPassword(password);
    user.setPassword(updatedpassword);
    userrepo.save(user);

  }

  public void uploaduserImage(User user, String image) {

    user.setUserImage(image);
    userrepo.save(user);

  }

  public void uploadUserProfileImage(User user, String userprofileimage) {
    user.setProfileImage(userprofileimage);
    userrepo.save(user);
  }

  public User findUserById(String id) {
    return userrepo.findUserById(id);
  }

  public void saveUser(User storedUser) {

    userrepo.save(storedUser);
  }

  public List<User> getAllUsers() {
    List<User> userlist = userrepo.findAll();
    return userlist.stream().filter(user -> !user.getRole().equals(Role.ADMIN))
        .collect(Collectors.toList());
  }

  public void deleteUser(User storedUser) {

    userrepo.delete(storedUser);
  }

  public void updateUserDetails(User storedUser) {
    userrepo.save(storedUser);
  }

  public String getUserFaceImage(User storedUser) {
    if (storedUser.getUserImage() == null) {
      return null;
    }
    return storedUser.getUserImage();
  }

  public boolean updateUserCardDetails(Usercarddetails usercarddetails, String id) {

    User storedUser = userrepo.findUserById(id);
    if (storedUser == null) {
      return false;
    } else {
      List<Usercarddetails> oldusercarddetails = storedUser.getUsercarddetails();
      if (oldusercarddetails.size() > 1) {
        return false;
      }
      for (Usercarddetails oldusercarddetails2 : oldusercarddetails) {
        if (oldusercarddetails2.getCardNumber().equals(usercarddetails.getCardNumber()))
          return false;
      }
      usercarddetailsrepo.save(usercarddetails);
      oldusercarddetails.add(usercarddetails);
      storedUser.setUsercarddetails(oldusercarddetails);
      userrepo.save(storedUser);
      return true;

    }

  }

}
