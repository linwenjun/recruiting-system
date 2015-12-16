package com.thoughtworks.twars.action;

import com.thoughtworks.twars.bean.Link;
import com.thoughtworks.twars.bean.User;
import com.thoughtworks.twars.data.UserMapper;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Map;

@Path("/user")
public class UserAction extends Action{

    private UserMapper userMapper;

    public UserAction() {
        super();
        userMapper = session.getMapper(com.thoughtworks.twars.data.UserMapper.class);
    }

    @GET
    @Path("/{param}")
    @Produces(MediaType.APPLICATION_JSON)
    public Map getUser(@PathParam("param") int userId) {

        User user = userMapper.getUserById(userId);

        Map<String, Object> map = new HashMap<>();
        map.put("id", user.getId());
        map.put("email", user.getEmail());
        map.put("mobilePhone", user.getMobilePhone());

        return map;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Map getUserByField(
            @QueryParam("field") String field,
            @QueryParam("value") String value
    ) {
        User user = null;

        if(field.equals("email")) {
            user = userMapper.getUserByEmail(value);
        } else if(field.equals("mobilePhone")) {
            user = userMapper.getUserByMobilePhone(value);
        }

        Map<String, Link> map = new HashMap<>();
        map.put("user", user.getLink());

        return map;
    }
}
