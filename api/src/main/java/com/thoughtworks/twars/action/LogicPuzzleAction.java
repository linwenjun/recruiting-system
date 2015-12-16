package com.thoughtworks.twars.action;

import com.thoughtworks.twars.bean.LogicPuzzle;
import com.thoughtworks.twars.data.LogicPuzzleMapper;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/logic-puzzle")
public class LogicPuzzleAction extends Action{

    private LogicPuzzleMapper logicPuzzleMapper;

    public LogicPuzzleAction() {
        super();
        logicPuzzleMapper = session.getMapper(LogicPuzzleMapper.class);
    }

    @GET
    @Path("/{param}")
    @Produces(MediaType.APPLICATION_JSON)
    public LogicPuzzle getUser(@PathParam("param") int userId) {

        LogicPuzzle logicPuzzle = logicPuzzleMapper.getLogicPuzzleById(userId);

        session.close();
        return logicPuzzle;
    }
}
