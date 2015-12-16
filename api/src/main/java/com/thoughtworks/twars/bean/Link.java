package com.thoughtworks.twars.bean;

public class Link {
    private String name;
    private String href;

    public Link(String href) {
        this.href = href;
    }

    public String getName() {
        return name;
    }

    public String getHref() {
        return href;
    }
}
