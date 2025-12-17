# Grok API 使用指南

本页面介绍 Grok 4 系列模型的使用方式与说明。

## 支持的模型

- **Grok 4**：通用模型，适合日常对话与问答
- **Grok 4 Heavy**：高性能模型，适合复杂推理与编程
- **Grok 4.1**：优化版本，适合高质量写作与内容生成

## 快速开始

1. 从中转服务商获取 API 密钥
2. 配置请求参数
3. 调用相应的模型端点

## API 示例

```bash
curl -X POST "https://your-proxy-endpoint.com/v1/chat/completions" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4",
    "messages": [{"role": "user", "content": "你好！"}]
  }'
```

## 参数说明

### model
指定要使用的模型：
- `grok-4`：标准模型
- `grok-4-heavy`：高性能模型
- `grok-4-1`：优化版本

### messages
对话消息数组，支持多轮对话。

### 其他参数
- `temperature`：控制输出的随机性（0-2）
- `max_tokens`：最大输出令牌数
- `stream`：是否使用流式输出

## 使用建议

1. **日常对话**：使用 `grok-4`
2. **编程任务**：推荐 `grok-4-heavy`
3. **内容创作**：推荐 `grok-4-1`

## 文档

- [Home](index.md) - 英文首页
- [Models](models.md) - 模型参考