---
id: intro
title: MaxCompute(ODPS) SDK for Java
sidebar_label: 介绍
sidebar_position: 1
---

# ODPS SDK for Java 介绍

MaxCompute(ODPS) SDK for Java 允许开发者将他们的Java应用程序与阿里云的 MaxCompute 服务集成，MaxCompute 是一个大规模并行处理的数据仓库系统。

该SDK提供了一组丰富的API，使您能够轻松地与 MaxCompute 进行交互，执行各种数据处理任务。


# 目录

- [快速开始](./quick-start.md)
- [示例代码](./example-code/intro.md)
- [API 参考](./api-reference/intro.md)
- [常见问题](./question.md)

# Maven 安装

要在您的Maven项目中使用ODPS SDK for Java，您需要将以下依赖添加到您的`pom.xml`中：

```xml
<!-- https://mvnrepository.com/artifact/com.aliyun.odps/odps-sdk-core -->
<dependency>
    <groupId>com.aliyun.odps</groupId>
    <artifactId>odps-sdk-core</artifactId>
    <version>0.47.0-public</version>
</dependency>
```
请确保您使用的是Maven Central Repository或阿里云Maven仓库中可用的最新稳定版本。

# 贡献
想要为ODPS SDK for Java做出贡献的开发者，请访问我们的[Github仓库](https://github.com/aliyun/aliyun-odps-java-sdk)。
