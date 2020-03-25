package userportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import userportal.model.User;
import userportal.repository.UserRepository;

@Service
public class UserService {

  @Autowired
  private UserRepository repository;

  public User create(User user) {
    return repository.save(user);
  }

  public Optional<User> delete(int id) {
    Optional<User> user = repository.findById(id);
    if (user != null) {
      repository.deleteById(id);
    }
    return user;
  }

  public List<User> findAll() {
    return repository.findAll();
  }

  public Optional<User> findById(int id) {
    return repository.findById(id);
  }

  public User update(User user) {
    return repository.save(user);
  }
}
