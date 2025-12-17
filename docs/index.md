# Grok API Guide

This site provides a comprehensive guide for using Grok 4 series models via third-party API relay services.

## Supported Models

- **Grok 4**: General-purpose model for daily conversations and Q&A
- **Grok 4 Heavy**: High-performance model for complex reasoning and programming
- **Grok 4.1**: Optimized iteration for high-quality writing and content generation

## Quick Start

1. Get your API key from a relay service provider
2. Configure your request parameters
3. Call the appropriate model endpoint

## API Example

```bash
curl -X POST "https://your-proxy-endpoint.com/v1/chat/completions" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

## Documentation

- [中文文档](zh.md) - Chinese documentation
- [Models](models.md) - Complete model reference