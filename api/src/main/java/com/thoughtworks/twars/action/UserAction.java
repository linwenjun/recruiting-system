package com.thoughtworks.twars.action;

import com.thoughtworks.twars.User;
import com.thoughtworks.twars.data.UserMapper;
import com.thoughtworks.twars.db.DBUtil;
import org.apache.ibatis.session.SqlSession;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/user")
public class UserAction {

    @GET
    @Path("/{param}")
    @Produces(MediaType.APPLICATION_JSON)
    public User getInsert(@PathParam("param") int userId) {

        SqlSession session = DBUtil.getSession();
        UserMapper mapper = session.getMapper(com.thoughtworks.twars.data.UserMapper.class);

        User user = mapper.getUserById(userId);

        System.out.println("======================================================");
        System.out.println(user);

        return user;
    }
}
