package com.thoughtworks.twars.data;

import com.thoughtworks.twars.User;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {
    @Select("Select * FROM users WHERE id = #{id}")
    User selectUser(int id);
}
