package com.thoughtworks.twars.action;

import com.thoughtworks.twars.bean.LogicPuzzle;
import com.thoughtworks.twars.bean.User;
import com.thoughtworks.twars.data.LogicPuzzleMapper;
import com.thoughtworks.twars.data.UserMapper;
import com.thoughtworks.twars.db.DBUtil;
import org.apache.ibatis.session.SqlSession;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/logic-puzzle")
public class LogicPuzzleAction {

    LogicPuzzleMapper mapper;
    SqlSession session;

    public LogicPuzzleAction() {
        session = DBUtil.getSession();
        mapper = session.getMapper(LogicPuzzleMapper.class);
    }

    @GET
    @Path("/{param}")
    @Produces(MediaType.APPLICATION_JSON)
    public LogicPuzzle getUser(@PathParam("param") int userId) {

        LogicPuzzle logicPuzzle = mapper.getLogicPuzzleById(userId);

        session.close();
        return logicPuzzle;
    }
}
