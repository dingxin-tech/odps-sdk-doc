---
title: Table
sidebar_position: 2
---

# Table

`Table` 类代表ODPS中的表，可以用于进行表操作，比如表的查询、分区操作等。下面是`Table` 类的使用说明。

## 概览

- [创建表实例](#创建表实例)
- [表基本信息](#表基本信息)
- [表数据操作](#表数据操作)
- [分区操作](#分区操作)
- [标签操作](#标签操作)

## 创建表实例对象

要操作表，首先需要创建一个表的实例对象。
注意，获取表实例是一个lazy操作，即只有当调用`Table` 类的其他方法时，才会真正获取表的元数据信息。
同时，只有表真实存在，才能获取到表实例
```java
Table table = odps.tables().get("table_project","table_name");
```

## 表基本信息

### 获取表名

```java
String tableName = table.getName();
```

### 获取表注释Prism

```java
String comment = table.getComment();
```

### 获取表所属用户

```java
String owner = table.getOwner();
```

### 获取表类型

```java
Table.TableType tableType = table.getType();
```

### 获取创建时间

```java
Date createdTime = table.getCreatedTime();
```

### 获取最后修改时间

```java
Date lastMetaModifiedTime = table.getLastMetaModifiedTime();
```

## 表数据操作

### 读取表数据

```java
RecordReader reader = table.read(partition,columns,limit,timezone);
```

### 删除表数据

```java
table.truncate();
```

## 分区操作

### 获取分区

```java
Partition partition = table.getPartition(partitionSpec);
```

### 获取所有分区

```java
List<Partition> partitions = table.getPartitions();
```

### 判断分区是否存在

```java
boolean exists = table.hasPartition(partitionSpec);
```

### 创建分区

```java
table.createPartition(partitionSpec);
```

### 删除分区

```java
table.deletePartition(partitionSpec);
```

## 标签操作

### 获取表标签

```java
List<Tag> tags = table.getTags();
```

### 添加标签到表

```java
table.addTag(tag);
```

### 删除标签从表

```java
table.removeTag(tag);
```

### 获取表的简单标签

```java
Map<String, Map<String, String>>simpleTags = table.getSimpleTags();
```

### 添加简单标签到表

```java
table.addSimpleTag(category,key,value);
```

### 删除简单标签从表

```java
table.removeSimpleTag(category,key,value);
```