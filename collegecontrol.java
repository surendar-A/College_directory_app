package com.example.college;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class collegecontrol {
   @GetMapping("/")
    public String test()
   {
        return "login";
   }
    @GetMapping("/student")
    public String test1()
    {
        return "student";
    }
    @GetMapping("/faculty")
    public String test2()
    {
        return "faculty";
    }
    @GetMapping("/admin")
    public String test3()
    {
        return "admin";
    }

}
