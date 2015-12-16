package com.thoughtworks.twars.action;

import com.thoughtworks.twars.bean.Link;
import com.thoughtworks.twars.bean.User;
import com.thoughtworks.twars.data.UserMapper;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Map;

@Path("/register")
public class RegisterAction extends Action{

    private UserMapper userMapper;

    public RegisterAction() {
        super();
        userMapper = session.getMapper(com.thoughtworks.twars.data.UserMapper.class);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Map createUser(User user) {
        userMapper.insertUser(user);
        session.commit();
        session.close();

        Map<String, Link> map = new HashMap<>();
        map.put("user", user.getLink());

        return map;
    }
}
