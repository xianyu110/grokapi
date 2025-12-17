# Grok API Guide (Grok 4 / 4 Heavy / 4.1)

中文 | [English](#english)

---

## 📌 项目简介（中文）

本项目提供 **Grok API 中转站使用指南**，
面向中文用户，支持 **Grok 4 / Grok 4 Heavy / Grok 4.1**。

### 当前支持模型
<!-- MODELS_ZH_START -->
- **Grok 4**：第四代通用模型，适合日常对话与问答
- **Grok 4 Heavy**：高性能版本，适合复杂推理与编程
- **Grok 4.1**：优化迭代版，适合高质量写作与内容生成
<!-- MODELS_ZH_END -->

### 🔗 推荐入口

- **Grok API 中转站**
  👉 https://apipro.maynor1024.live/

- **Grok 镜像站聚合页**
  👉 https://maynorai.top/list/#/home/

> 本项目仅做信息整理与使用说明，不提供模型本体服务。

### 使用方式

1. 打开中转站地址
2. 获取 API 密钥或扫码进入
3. 配置请求参数
4. 调用相应的模型端点

### API 端点示例

```bash
curl -X POST "https://your-proxy-endpoint.com/v1/chat/completions" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

---

## English

This repository provides a **Grok API usage guide**
for Grok 4 series models.

### Supported Models
<!-- MODELS_EN_START -->
- **Grok 4**: Fourth-generation general-purpose model
- **Grok 4 Heavy**: High-performance version for complex reasoning
- **Grok 4.1**: Optimized iteration for writing and content generation
<!-- MODELS_EN_END -->

### Usage

1. Get your API key
2. Configure request parameters
3. Call the appropriate model endpoint

### API Endpoint Example

```bash
curl -X POST "https://your-proxy-endpoint.com/v1/chat/completions" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

---

## 📚 文档

访问我们的 [GitHub Pages 文档站](https://xianyu110.github.io/grokapi/) 获取详细指南。

---

## ⚠️ Disclaimer

This project is not affiliated with xAI or Grok official services.