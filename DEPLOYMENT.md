# Deployment Guide - Leisure Vihang

## Quick Start to Vercel Deployment

### Step 1: Prepare Your Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Leisure Vihang travel website"

# Create repository on GitHub
# Then push:
git remote add origin https://github.com/yourusername/leisure-vihang.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Method 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

#### Method 2: GitHub Integration (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste your GitHub repo URL
5. Click "Import"
6. Vercel will auto-detect settings
7. Click "Deploy"

#### Method 3: Vercel Dashboard

1. Visit [vercel.com/new](https://vercel.com/new)
2. Select "Other" → "Create Git Repository"
3. Upload your project files
4. Configure settings
5. Deploy

### Step 3: Configure Custom Domain (Optional)

1. In Vercel Dashboard → Project Settings
2. Go to "Domains"
3. Add your custom domain
4. Update DNS records at your domain provider
5. Wait for DNS propagation (5-30 minutes)

### Step 4: Set Environment Variables

1. Go to Project Settings → Environment Variables
2. Add your API keys:

```
SENDGRID_API_KEY=your_key
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
DATABASE_URL=your_database_url
AI_API_KEY=your_api_key
```

3. Redeploy after adding variables

## Post-Deployment Checklist

- [ ] Test website on desktop
- [ ] Test website on mobile
- [ ] Test chat functionality
- [ ] Test form submission
- [ ] Test WhatsApp link
- [ ] Test phone link
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test animations
- [ ] Check page speed (Vercel Analytics)

## Monitoring & Analytics

### Enable Vercel Analytics

1. Project Settings → Analytics
2. Enable "Web Analytics"
3. View real-time metrics

### Monitor Performance

- Check Core Web Vitals
- Monitor API response times
- Track error rates
- Review user behavior

## Continuous Deployment

Every push to `main` branch automatically deploys:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel automatically deploys!
```

## Rollback to Previous Version

1. Go to Vercel Dashboard
2. Click "Deployments"
3. Find previous deployment
4. Click "Promote to Production"

## Troubleshooting Deployment

### Build Fails

Check build logs in Vercel Dashboard:
1. Deployments → Failed deployment
2. Click "View Build Logs"
3. Fix errors and redeploy

### API Not Working

1. Verify API file is in `/api/` folder
2. Check function exports correctly
3. Test with `vercel dev` locally
4. Check environment variables are set

### Static Files Not Loading

1. Ensure files are in root directory
2. Check file paths in HTML
3. Verify `vercel.json` routes

### Domain Not Working

1. Check DNS records are correct
2. Wait for DNS propagation
3. Clear browser cache
4. Try incognito mode

## Performance Optimization

### Image Optimization

```html
<!-- Use WebP with fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

### Caching Headers

Add to `vercel.json`:

```json
"headers": [
  {
    "source": "/static/(.*)",
    "headers": [
      {
        "key": "Cache-Control",
        "value": "public, max-age=31536000, immutable"
      }
    ]
  }
]
```

### Minification

Already handled by Vercel automatically.

## Security Best Practices

1. **Never commit secrets** - Use environment variables
2. **Enable HTTPS** - Automatic with Vercel
3. **Add security headers** - Configure in `vercel.json`
4. **Validate form input** - Server-side validation
5. **Rate limiting** - Implement for API endpoints

### Add Security Headers

```json
"headers": [
  {
    "source": "/(.*)",
    "headers": [
      {
        "key": "X-Content-Type-Options",
        "value": "nosniff"
      },
      {
        "key": "X-Frame-Options",
        "value": "DENY"
      },
      {
        "key": "X-XSS-Protection",
        "value": "1; mode=block"
      }
    ]
  }
]
```

## Scaling & Limits

- **Serverless Functions**: 10 seconds timeout (Pro plan: 60 seconds)
- **Bandwidth**: Unlimited
- **Deployments**: Unlimited
- **Team Members**: Depends on plan

## Cost Estimation

- **Hobby Plan**: Free (perfect for starting)
- **Pro Plan**: $20/month (recommended for business)
- **Enterprise**: Custom pricing

## Support

- Vercel Docs: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Support: https://vercel.com/support

## Next Steps

1. ✅ Deploy to Vercel
2. 🔗 Set up custom domain
3. 📧 Integrate email service
4. 💬 Add WhatsApp integration
5. 🤖 Enhance AI chatbot
6. 📊 Set up analytics
7. 🔐 Add authentication
8. 💾 Connect database

---

**Your site is now live! 🚀**

Share your deployment URL and start booking trips!
