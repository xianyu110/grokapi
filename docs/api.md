# 📡 API 接口文档

## 基本信息

**Base URL:** `https://your-proxy-endpoint.com/v1`

**认证方式:** Bearer Token

## 请求参数

### 基本请求格式

```json
{
  "model": "grok-4",
  "messages": [
    {
      "role": "user",
      "content": "你好！"
    }
  ],
  "temperature": 0.7,
  "max_tokens": 1000,
  "stream": false
}
```

## 支持的模型

| 模型名称 | API 标识 | 特点 |
|---|---|---|
| Grok 4 | `grok-4` | 通用模型，适合日常对话 |
| Grok 4 Heavy | `grok-4-heavy` | 高性能，适合复杂推理 |
| Grok 4.1 | `grok-4-1` | 优化版本，适合内容创作 |

## 请求示例

### cURL 示例

```bash
curl -X POST "https://your-proxy-endpoint.com/v1/chat/completions" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4",
    "messages": [
      {
        "role": "user",
        "content": "请介绍一下人工智能的发展历史"
      }
    ],
    "temperature": 0.7,
    "max_tokens": 500
  }'
```

### Python 示例

```python
import requests

url = "https://your-proxy-endpoint.com/v1/chat/completions"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "model": "grok-4",
    "messages": [
        {
            "role": "user",
            "content": "写一个Python函数来计算斐波那契数列"
        }
    ],
    "temperature": 0.3,
    "max_tokens": 800
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

### JavaScript 示例

```javascript
const response = await fetch('https://your-proxy-endpoint.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'grok-4',
    messages: [
      {
        role: 'user',
        content: '解释一下什么是机器学习'
      }
    ],
    temperature: 0.5,
    max_tokens: 600
  })
});

const result = await response.json();
console.log(result);
```

## 参数说明

| 参数 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `model` | string | ✅ | 要使用的模型名称 |
| `messages` | array | ✅ | 对话消息列表 |
| `temperature` | number | ❌ | 控制输出的随机性 (0-2) |
| `max_tokens` | number | ❌ | 最大输出令牌数 |
| `stream` | boolean | ❌ | 是否使用流式输出 |
| `top_p` | number | ❌ | 核采样参数 (0-1) |

## 消息格式

```json
{
  "role": "user|assistant|system",
  "content": "消息内容"
}
```

### 角色说明

- `user`: 用户消息
- `assistant`: 助手回复
- `system`: 系统指令（可选）

## 响应格式

### 标准响应

```json
{
  "id": "chatcmpl-abc123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "grok-4",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "这是AI的回复内容..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 56,
    "completion_tokens": 31,
    "total_tokens": 87
  }
}
```

### 流式响应

```json
{
  "id": "chatcmpl-abc123",
  "object": "chat.completion.chunk",
  "created": 1677652288,
  "model": "grok-4",
  "choices": [
    {
      "index": 0,
      "delta": {
        "content": "这"
      },
      "finish_reason": null
    }
  ]
}
```

## 错误处理

### 常见错误码

| 状态码 | 说明 | 解决方案 |
|---|---|---|
| 400 | 请求参数错误 | 检查请求格式和参数 |
| 401 | 认证失败 | 检查 API Key 是否正确 |
| 429 | 请求频率限制 | 降低请求频率 |
| 500 | 服务器内部错误 | 稍后重试 |

### 错误响应格式

```json
{
  "error": {
    "message": "Invalid API key",
    "type": "invalid_request_error",
    "param": null,
    "code": "invalid_api_key"
  }
}
```

## 最佳实践

### 1. 温度设置
- **创意任务**: `temperature: 0.8-1.0`
- **事实性回答**: `temperature: 0.1-0.3`
- **平衡需求**: `temperature: 0.5-0.7`

### 2. 令牌管理
- 预估输入令牌数，避免超出限制
- 设置合理的 `max_tokens` 值
- 监控使用量，避免超额费用

### 3. 错误重试
- 实现指数退避重试机制
- 处理网络超时和服务不可用情况
- 记录错误日志便于排查

### 4. 内容过滤
- 添加输入验证和内容过滤
- 避免发送敏感或违规内容
- 实现结果内容审核

## SDK 和工具

### 推荐的 HTTP 客户端
- **Python**: `requests`, `httpx`
- **Node.js**: `axios`, `node-fetch`
- **Java**: `OkHttp`, `Apache HttpClient`
- **Go**: `net/http`

### 调试工具
- **Postman**: API 测试和调试
- **curl**: 命令行测试
- **浏览器开发者工具**: 网络请求分析