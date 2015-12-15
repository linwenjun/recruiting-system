package com.thoughtworks.twars.data;

import com.thoughtworks.twars.bean.User;

import java.util.List;

public interface UserMapper {

    public int insertUser(User user);

    public User getUserById(int id);

    public List<User> getAllUsers();

    public void updateUser(User user);

    public void deleteUser(Integer id);
}
