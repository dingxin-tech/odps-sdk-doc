---
title: 更新日志
sidebar_position: 6
---


# 0.47.0-public

- 增加对Stream新类型的支持，可用于进行增量查询
- TableTunnel增加preview方法，用于数据预览。
- Table类read方法，实现更换为TableTunnel.preview方法，行为有变化。
- UpsertSession支持写入部分列，支持设置netty线程池数目（默认更改为1），支持设置最大并发量（默认值更改为16）。
- TableTunnel支持设置quotaName
- DownloadSession新增参数disableModifiedCheck，用于跳过修改检查。新增参数fetchBlockId用于跳过对blockId list的获取。
- 引入OdpsRecordConverter，用于对Record进行parse、format
- 增强Projects类，增加create、delete方法，开放update方法。原group-api包下相关操作设置为deprecated
- 增强Schemas类，支持通过设置SchemaFilter过滤schema，支持listSchema，及获取schema的详细meta信息
- MapWritable 默认时间由HashMap改为LinkedHashMap，确保有序
- Column 支持 Builder 模式创建