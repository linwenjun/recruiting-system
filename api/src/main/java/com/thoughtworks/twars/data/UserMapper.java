package com.thoughtworks.twars.data;

import com.thoughtworks.twars.bean.User;

public interface UserMapper {

    public int insertUser(User user);

    public User getUserById(int id);

    public User getUserByEmail(String email);

    public User getUserByMobilePhone(String mobilePhone);

    public User getUserByEmailAndPassWord(User user);
}
