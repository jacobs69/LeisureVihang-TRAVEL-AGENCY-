# AI Integration Guide - Leisure Vihang

This guide shows how to integrate AI services with your chatbot for smarter responses.

## Current Setup

The chatbot currently uses rule-based responses. Here's how to upgrade it with real AI.

## Option 1: OpenAI GPT Integration

### Setup

1. Get API key from [openai.com](https://platform.openai.com)
2. Add to environment variables:

```env
OPENAI_API_KEY=sk-your-key-here
```

### Backend Implementation

Create `api/chat.js`:

```javascript
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, conversationHistory } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful travel assistant for Leisure Vihang, a travel booking company in Mumbai. 
          You help customers plan trips to destinations like Goa, Manali, Kerala, Rajasthan, Kashmir, and Ladakh.
          You provide information about packages, pricing, and help with bookings.
          Always be friendly and professional.`
        },
        ...conversationHistory,
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    const aiResponse = response.data.choices[0].message.content;

    return res.status(200).json({
      success: true,
      response: aiResponse
    });

  } catch (error) {
    console.error('OpenAI Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to get AI response'
    });
  }
}
```

### Frontend Update

Update `script.js`:

```javascript
async function sendChat() {
  const inp = document.getElementById('chatInput');
  const txt = inp.value.trim();
  if (!txt) return;

  addMsg(txt, 'user');
  inp.value = '';
  document.getElementById('chatOptions').style.display = 'none';

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: txt,
        conversationHistory: getConversationHistory()
      })
    });

    const data = await response.json();
    if (data.success) {
      addBot(data.response);
    } else {
      addBot('Sorry, I had trouble understanding. Please try again.');
    }
  } catch (error) {
    console.error('Chat error:', error);
    addBot('Sorry, there was an error. Please try again.');
  }
}

function getConversationHistory() {
  const messages = document.querySelectorAll('.msg');
  const history = [];
  
  messages.forEach(msg => {
    const isUser = msg.classList.contains('user');
    history.push({
      role: isUser ? 'user' : 'assistant',
      content: msg.textContent
    });
  });
  
  return history;
}
```

## Option 2: Google Vertex AI

### Setup

1. Create Google Cloud project
2. Enable Vertex AI API
3. Create service account
4. Download JSON key

### Implementation

```javascript
import { VertexAI } from '@google-cloud/vertexai';

const vertexAI = new VertexAI({
  project: process.env.GCP_PROJECT_ID,
  location: 'us-central1',
});

const model = vertexAI.getGenerativeModel({
  model: 'gemini-pro',
});

export default async function handler(req, res) {
  const { message } = req.body;

  try {
    const response = await model.generateContent(message);
    const aiResponse = response.response.text();

    return res.status(200).json({
      success: true,
      response: aiResponse
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to get AI response'
    });
  }
}
```

## Option 3: Hugging Face API

### Setup

1. Get API key from [huggingface.co](https://huggingface.co)
2. Add to environment:

```env
HUGGINGFACE_API_KEY=hf_your_key_here
```

### Implementation

```javascript
export default async function handler(req, res) {
  const { message } = req.body;

  try {
    const response = await fetch(
      'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1',
      {
        headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
        method: 'POST',
        body: JSON.stringify({ inputs: message }),
      }
    );

    const result = await response.json();
    const aiResponse = result[0].generated_text;

    return res.status(200).json({
      success: true,
      response: aiResponse
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to get AI response'
    });
  }
}
```

## Option 4: Cohere API

### Setup

1. Get API key from [cohere.com](https://cohere.com)
2. Add to environment:

```env
COHERE_API_KEY=your_key_here
```

### Implementation

```javascript
import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export default async function handler(req, res) {
  const { message } = req.body;

  try {
    const response = await cohere.generate({
      prompt: `You are a travel assistant for Leisure Vihang. Answer this question: ${message}`,
      maxTokens: 150,
      temperature: 0.8,
    });

    const aiResponse = response.generations[0].text;

    return res.status(200).json({
      success: true,
      response: aiResponse
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to get AI response'
    });
  }
}
```

## Option 5: Local AI with Ollama

### Setup

1. Install [Ollama](https://ollama.ai)
2. Run: `ollama pull mistral`
3. Start server: `ollama serve`

### Implementation

```javascript
export default async function handler(req, res) {
  const { message } = req.body;

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      body: JSON.stringify({
        model: 'mistral',
        prompt: message,
        stream: false,
      }),
    });

    const data = await response.json();
    const aiResponse = data.response;

    return res.status(200).json({
      success: true,
      response: aiResponse
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Failed to get AI response'
    });
  }
}
```

## Comparison Table

| Service | Cost | Speed | Quality | Setup |
|---------|------|-------|---------|-------|
| OpenAI GPT-3.5 | $0.0005/1K tokens | Fast | Excellent | Easy |
| OpenAI GPT-4 | $0.03/1K tokens | Medium | Best | Easy |
| Google Vertex AI | $0.00025/1K tokens | Fast | Very Good | Medium |
| Hugging Face | Free-$9/month | Medium | Good | Easy |
| Cohere | Free-$100/month | Fast | Good | Easy |
| Ollama (Local) | Free | Slow | Good | Hard |

## Recommended Setup

For Leisure Vihang, I recommend:

1. **Start**: Rule-based responses (current setup)
2. **Scale**: OpenAI GPT-3.5 (best balance)
3. **Advanced**: Fine-tune model with your data

## Cost Optimization

### Caching Responses

```javascript
const cache = new Map();

function getCachedResponse(message) {
  return cache.get(message.toLowerCase());
}

function setCachedResponse(message, response) {
  cache.set(message.toLowerCase(), response);
}
```

### Rate Limiting

```javascript
const rateLimit = new Map();

function checkRateLimit(userId) {
  const now = Date.now();
  const userLimit = rateLimit.get(userId) || [];
  const recentRequests = userLimit.filter(t => now - t < 60000);
  
  if (recentRequests.length >= 10) {
    return false; // Rate limited
  }
  
  rateLimit.set(userId, [...recentRequests, now]);
  return true;
}
```

## Testing AI Integration

### Local Testing

```bash
# Test with curl
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Tell me about Goa packages"}'
```

### Unit Tests

```javascript
// test/chat.test.js
import handler from '../api/chat.js';

describe('Chat API', () => {
  it('should return AI response', async () => {
    const req = {
      method: 'POST',
      body: { message: 'Hello' }
    };
    
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
```

## Monitoring AI Usage

### Track API Calls

```javascript
async function trackAIUsage(userId, tokens, cost) {
  await db.collection('ai_usage').insertOne({
    userId,
    tokens,
    cost,
    timestamp: new Date()
  });
}
```

### Set Alerts

```javascript
async function checkUsageLimit(userId) {
  const usage = await db.collection('ai_usage')
    .aggregate([
      { $match: { userId } },
      { $group: { _id: null, totalCost: { $sum: '$cost' } } }
    ])
    .toArray();
  
  if (usage[0]?.totalCost > 100) {
    // Alert: Usage exceeded $100
  }
}
```

## Privacy & Security

1. **Don't send sensitive data** to AI APIs
2. **Encrypt** API keys in environment variables
3. **Log** all AI interactions for compliance
4. **Anonymize** user data before sending
5. **Review** AI responses before showing users

## Next Steps

1. Choose an AI service
2. Get API key
3. Add to environment variables
4. Implement backend handler
5. Update frontend to call API
6. Test thoroughly
7. Monitor usage and costs
8. Optimize based on metrics

---

**Your AI chatbot is ready to learn! 🤖**
