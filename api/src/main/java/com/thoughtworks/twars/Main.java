package com.thoughtworks.twars;

import com.thoughtworks.twars.data.UserMapper;
import com.thoughtworks.twars.db.DBUtil;
import org.apache.ibatis.session.SqlSession;

public class Main {

    public static void main(String[] args) {

        SqlSession session = DBUtil.getSession();
        UserMapper mapper = session.getMapper(UserMapper.class);
        User user = mapper.selectUser(1);
        session.close();
        System.out.println(user);
    }
}
