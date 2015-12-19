package com.thoughtworks.twars.action;

import com.thoughtworks.twars.db.DBUtil;
import org.apache.ibatis.session.SqlSession;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Action {

    protected SqlSession session;
    protected Logger logger;

    public Action() {
        session = DBUtil.getSession();
        logger = LogManager.getRootLogger();
    }
}
