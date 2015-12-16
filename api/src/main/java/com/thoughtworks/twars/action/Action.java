package com.thoughtworks.twars.action;

import com.thoughtworks.twars.db.DBUtil;
import org.apache.ibatis.session.SqlSession;

public class Action {

    protected SqlSession session;

    public Action() {
        session = DBUtil.getSession();
    }
}
