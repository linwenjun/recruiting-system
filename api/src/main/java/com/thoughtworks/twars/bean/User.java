package com.thoughtworks.twars.bean;

public class User {
    private int id;
    private String email;
    private String mobilePhone;
    private String password;

    public Link getLink() {
        return link;
    }

    public void setLink(Link link) {
        this.link = link;
    }

    private Link link;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
        Link link = new Link("user/" + String.valueOf(id));
        this.setLink(link);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobilePhone() {
        return mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "id:" + this.id + ", email:" + this.email;
    }
}
