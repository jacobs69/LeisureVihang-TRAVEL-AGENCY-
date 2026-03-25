# Leisure Vihang - Travel Booking Website

A modern, responsive travel booking website with AI-powered chatbot integration. Built with HTML, CSS, and JavaScript, ready for deployment on Vercel.

## Features

✨ **Modern Design**
- Responsive layout (mobile, tablet, desktop)
- Dark theme with gold accents
- Smooth animations and transitions
- Professional typography

🤖 **AI Chatbot**
- Real-time chat interface
- Intelligent responses based on user queries
- Quick reply buttons for common questions
- Integration-ready for AI APIs

📱 **Booking System**
- Contact form with validation
- Multiple trip types (School, College, Family, Corporate, etc.)
- 6 popular destinations with pricing
- WhatsApp and phone integration

🎯 **Services**
- School IV Trips
- College Tours
- Family Holidays
- Corporate Outings
- Personal Trips
- International Tours

## Project Structure

```
leisure-vihang/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Frontend JavaScript & chatbot logic
├── api/
│   └── submit-enquiry.js   # Vercel serverless function
├── package.json        # Project metadata
├── vercel.json         # Vercel configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Setup Instructions

### 1. Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd leisure-vihang

# Install dependencies
npm install

# Run local development server
npm run dev
```

The site will be available at `http://localhost:3000`

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel

# Follow the prompts to connect your GitHub account
```

#### Option B: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the configuration
6. Click "Deploy"

#### Option C: Using Vercel Dashboard

1. Visit [vercel.com/new](https://vercel.com/new)
2. Select "Other" for project type
3. Upload your project files
4. Configure environment variables if needed
5. Deploy

### 3. Environment Variables (Optional)

Create a `.env.local` file for local development:

```env
# Email Service (SendGrid, Mailgun, etc.)
SENDGRID_API_KEY=your_key_here

# WhatsApp Integration (Twilio)
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_WHATSAPP_NUMBER=+1234567890

# Database (Firebase, MongoDB, etc.)
DATABASE_URL=your_database_url

# AI Service (OpenAI, Hugging Face, etc.)
AI_API_KEY=your_api_key
```

## Customization

### Update Contact Information

Edit these files to add your actual contact details:

**index.html:**
- Line 1: WhatsApp link
- Line 2: Phone number
- Line 3: Email address

```html
<!-- Update these -->
<a href="https://wa.me/919876543210?text=Hi%20Leisure%20Vihang!%20I%20want%20to%20plan%20a%20trip." class="whatsapp-btn">
<a href="tel:+919876543210" class="call-btn">
<a href="mailto:hello@leisurevihang.com">
```

### Customize Colors

Edit `:root` variables in `styles.css`:

```css
:root {
  --deep: #0a0f1e;        /* Dark background */
  --navy: #111827;        /* Navy sections */
  --gold: #d4a853;        /* Primary accent */
  --gold2: #f0c96b;       /* Lighter gold */
  --cream: #fdf8f0;       /* Text color */
  --muted: #8a9bb0;       /* Secondary text */
  --card: #131c2e;        /* Card background */
  --accent: #e8734a;      /* Accent color */
  --green: #2ecc71;       /* Success color */
}
```

### Add More Destinations

Add new trip cards in the "PACKAGES" section of `index.html`:

```html
<div class="trip-card">
  <div class="trip-img trip-img-custom">🏔️<div class="trip-badge">New</div></div>
  <div class="trip-body">
    <div class="trip-name">Your Destination</div>
    <div class="trip-meta"><span>📅 Duration</span><span>👥 Group</span></div>
    <div class="trip-price">
      <div><div class="price-val">₹Price</div></div>
      <button class="book-btn" onclick="openChat('Your Destination')">Enquire →</button>
    </div>
  </div>
</div>
```

### Enhance AI Chatbot

Update `botReplies` in `script.js` to add more intelligent responses:

```javascript
const botReplies = {
  'your-keyword': 'Your custom response here',
  'another-keyword': 'Another response'
};
```

## Backend Integration

### Email Notifications

Integrate with SendGrid, Mailgun, or similar:

```javascript
// In api/submit-enquiry.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: 'hello@leisurevihang.com',
  from: 'noreply@leisurevihang.com',
  subject: `New Enquiry from ${name}`,
  html: `<p>Name: ${name}</p><p>Phone: ${phone}</p>...`
});
```

### WhatsApp Integration

Use Twilio for WhatsApp notifications:

```javascript
const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

await client.messages.create({
  body: `New booking enquiry from ${name}`,
  from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
  to: `whatsapp:${phone}`
});
```

### Database Storage

Save enquiries to MongoDB, Firebase, or PostgreSQL:

```javascript
// Example with MongoDB
const enquiry = await Enquiry.create({
  name, phone, email, tripType, destination,
  groupSize, departureDate, budget, specialRequirements
});
```

## Performance Optimization

- ✅ Minified CSS and JavaScript
- ✅ Optimized images and gradients
- ✅ Lazy loading for chat window
- ✅ Smooth animations with GPU acceleration
- ✅ Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO Optimization

Add meta tags to `index.html` for better search visibility:

```html
<meta name="description" content="Book your perfect trip with Leisure Vihang...">
<meta name="keywords" content="travel, booking, tours, India...">
<meta property="og:title" content="Leisure Vihang – Travel That Moves You">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

## Troubleshooting

### Chat not working?
- Check browser console for errors
- Ensure JavaScript is enabled
- Clear browser cache

### Form not submitting?
- Verify API endpoint is correct
- Check network tab in DevTools
- Ensure backend is running

### Styling issues?
- Clear CSS cache
- Check for CSS conflicts
- Verify color variables are set

## Support & Contact

For issues or questions:
- 📧 Email: hello@leisurevihang.com
- 📞 Phone: +91 98765 43210
- 💬 WhatsApp: [Chat with us](https://wa.me/919876543210)

## License

MIT License - feel free to use this template for your travel business!

## Credits

Built with ❤️ for wanderers everywhere.
