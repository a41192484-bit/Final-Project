package com.insight.crew.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

// mapper 자동 등록

@Configuration
@MapperScan(basePackages = "com.insight.crew.mapper")
public class MyBatisConfig {
}
