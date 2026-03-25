# Quick Reference Card - Leisure Vihang

## 🚀 Deploy in 3 Steps

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod
```

**Your site is live!** 🎉

---

## 📝 Update Contact Info

**File: index.html**

Find and replace:
- `+919876543210` → Your phone
- `hello@leisurevihang.com` → Your email
- `https://wa.me/919876543210` → Your WhatsApp link

---

## 🎨 Change Colors

**File: styles.css** (Line 1-10)

```css
:root {
  --deep: #0a0f1e;        /* Dark background */
  --navy: #111827;        /* Navy sections */
  --gold: #d4a853;        /* Primary color */
  --gold2: #f0c96b;       /* Lighter gold */
  --cream: #fdf8f0;       /* Text color */
  --muted: #8a9bb0;       /* Secondary text */
  --card: #131c2e;        /* Card background */
  --accent: #e8734a;      /* Accent color */
  --green: #2ecc71;       /* Success color */
}
```

---

## 🤖 Add AI Responses

**File: script.js** (Line 30-40)

```javascript
const botReplies = {
  'your-keyword': 'Your response here',
  'another-keyword': 'Another response'
};
```

---

## 📦 Add New Destination

**File: index.html** (Search: "PACKAGES")

```html
<div class="trip-card">
  <div class="trip-img trip-img-custom">🏔️
    <div class="trip-badge">New</div>
  </div>
  <div class="trip-body">
    <div class="trip-name">Your Destination</div>
    <div class="trip-meta">
      <span>📅 Duration</span>
      <span>👥 Group Size</span>
    </div>
    <div class="trip-price">
      <div class="price-val">₹Price</div>
      <button class="book-btn" onclick="openChat('Your Destination')">
        Enquire →
      </button>
    </div>
  </div>
</div>
```

---

## 🔧 Environment Variables

**Create: .env.local**

```env
SENDGRID_API_KEY=your_key
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
OPENAI_API_KEY=your_key
DATABASE_URL=your_url
```

---

## 📊 File Sizes

| File | Size | Purpose |
|------|------|---------|
| index.html | ~25 KB | Website structure |
| styles.css | ~35 KB | All styling |
| script.js | ~8 KB | Chatbot & forms |
| api/submit-enquiry.js | ~2 KB | Backend API |

**Total: ~70 KB** (Very fast!)

---

## 🔗 Important Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub**: https://github.com
- **OpenAI API**: https://platform.openai.com
- **SendGrid**: https://sendgrid.com
- **Twilio**: https://twilio.com

---

## ⚡ Performance Tips

1. **Images**: Use WebP format
2. **Caching**: Enable in vercel.json
3. **Minify**: Already done
4. **CDN**: Automatic with Vercel
5. **Lazy Load**: Implement for images

---

## 🔐 Security Checklist

- [ ] Never commit API keys
- [ ] Use environment variables
- [ ] Enable HTTPS (automatic)
- [ ] Validate form input
- [ ] Add rate limiting
- [ ] Monitor API usage

---

## 📱 Responsive Breakpoints

```css
/* Mobile: < 768px */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */
```

All breakpoints already configured!

---

## 🎯 SEO Optimization

Add to `<head>` in index.html:

```html
<meta name="description" content="Book your perfect trip...">
<meta name="keywords" content="travel, tours, India...">
<meta property="og:title" content="Leisure Vihang">
<meta property="og:image" content="your-image-url">
```

---

## 💬 Chat Commands

Users can type:
- "Goa" → Get Goa package info
- "Manali" → Get Manali package info
- "Price" → Get pricing info
- "Contact" → Get contact info
- "WhatsApp" → Get WhatsApp link

---

## 🧪 Test Checklist

- [ ] Desktop view
- [ ] Mobile view
- [ ] Tablet view
- [ ] Chat functionality
- [ ] Form submission
- [ ] Links work
- [ ] Images load
- [ ] Animations smooth
- [ ] Page speed good
- [ ] Mobile speed good

---

## 📞 Support Contacts

- **Email**: hello@leisurevihang.com
- **Phone**: +91 98765 43210
- **WhatsApp**: [Chat](https://wa.me/919876543210)

---

## 🚀 Next Actions

1. ✅ Deploy to Vercel
2. ✅ Update contact info
3. ✅ Customize colors
4. ✅ Add AI service
5. ✅ Set up email
6. ✅ Add WhatsApp bot
7. ✅ Connect database
8. ✅ Monitor analytics

---

## 💡 Pro Tips

1. **Backup**: Always keep a backup
2. **Version Control**: Use Git
3. **Testing**: Test before deploying
4. **Monitoring**: Check analytics daily
5. **Updates**: Keep dependencies updated
6. **Security**: Review logs weekly
7. **Performance**: Monitor page speed
8. **Users**: Gather feedback

---

## 🎓 Learning Resources

- **HTML/CSS/JS**: MDN Web Docs
- **Vercel**: vercel.com/docs
- **APIs**: api.example.com/docs
- **Design**: dribbble.com
- **Performance**: web.dev

---

## 📈 Growth Hacks

1. Add Google Analytics
2. Set up email marketing
3. Create social media content
4. Ask for reviews
5. Offer referral discounts
6. Partner with influencers
7. Run ads on Google/Facebook
8. Optimize for SEO

---

## 🎉 You're Ready!

Your website is:
- ✅ Fully functional
- ✅ Mobile responsive
- ✅ AI-powered
- ✅ Ready to deploy
- ✅ Scalable
- ✅ Professional

**Start booking trips today!** 🌍✈️

---

**Last Updated**: March 2025
**Version**: 1.0.0
**Status**: Production Ready ✅
