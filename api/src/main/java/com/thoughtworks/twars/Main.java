package com.thoughtworks.twars;

import com.thoughtworks.twars.bean.User;
import com.thoughtworks.twars.data.UserMapper;
import com.thoughtworks.twars.db.DBUtil;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

public class Main {

    public static void main(String[] args) {
        SqlSession session = DBUtil.getSession();
        UserMapper mapper = session.getMapper(com.thoughtworks.twars.data.UserMapper.class);

        User user = mapper.getUserById(1);
        List<User> users = (List<User>) mapper.getAllUsers();

        User userToInsert = new User();
        userToInsert.setEmail("a@qasdfas.com");
        userToInsert.setMobilePhone("123213123");
        userToInsert.setPassword("jsafds");

        int result = mapper.insertUser(userToInsert);
        System.out.println(userToInsert.getId());
        session.close();
        System.out.println(users.size());
    }
}
