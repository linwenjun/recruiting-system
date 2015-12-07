package com.thoughtworks.twars;

import com.thoughtworks.twars.data.UserMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;

public class Main {
    public static void main(String [] args) {
        String resource = "com/thoughtworks/twars/data/mybatis-config.xml";
        try {
            InputStream is = Resources.getResourceAsStream(resource);
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(is);
            sqlSessionFactory.getConfiguration().addMapper(UserMapper.class);

            SqlSession session = sqlSessionFactory.openSession();

            UserMapper mapper = session.getMapper(UserMapper.class);
            User user = mapper.selectUser(1);
            System.out.println(user);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
