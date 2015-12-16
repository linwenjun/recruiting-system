package com.thoughtworks.twars.action;

import com.thoughtworks.twars.bean.Link;
import com.thoughtworks.twars.bean.User;
import com.thoughtworks.twars.data.UserMapper;
import com.thoughtworks.twars.db.DBUtil;
import org.apache.ibatis.session.SqlSession;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Map;

@Path("/user")
public class UserAction {

    UserMapper mapper;
    SqlSession session;

    public UserAction() {
        session = DBUtil.getSession();
        mapper = session.getMapper(com.thoughtworks.twars.data.UserMapper.class);
    }

    @GET
    @Path("/{param}")
    @Produces(MediaType.APPLICATION_JSON)
    public User getUser(@PathParam("param") int userId) {

        User user = mapper.getUserById(userId);
        return user;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Map getUserByField(
            @QueryParam("field") String field,
            @QueryParam("value") String value
    ) {
        User user = null;

        if(field.equals("email")) {
            user = mapper.getUserByEmail(value);
        } else if(field.equals("mobilePhone")) {
            user = mapper.getUserByMobilePhone(value);
        }

        Map<String, Link> map = new HashMap<>();
        map.put("user", user.getLink());

        return map;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User createUser(User user) {
        mapper.insertUser(user);
        session.commit();
        session.close();
        return user;
    }
}
