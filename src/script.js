// AI Chat Bot Functions - Exposed to global scope
window.toggleChat = function() {
  const w = document.getElementById('chatWindow');
  w.classList.toggle('open');
}

window.openChat = function(trip) {
  const w = document.getElementById('chatWindow');
  w.classList.add('open');
  w.scrollIntoView({ behavior: 'smooth', block: 'end' });
  addMsg(`I'm interested in the ${trip} package. Can you tell me more?`, 'user');
  setTimeout(() => {
    addBot(`Great choice! The ${trip} is one of our most popular packages. To give you the best quote, could you tell me: 1) How many people? 2) Your preferred dates? 3) Any special requirements?`);
  }, 800);
}

function addMsg(text, type) {
  const m = document.getElementById('chatMessages');
  const d = document.createElement('div');
  d.className = `msg ${type}`;
  d.textContent = text;
  m.appendChild(d);
  m.scrollTop = m.scrollHeight;
}

function addBot(text) {
  addMsg(text, 'bot');
}

const botReplies = {
  'school iv trip': "Perfect! We specialize in school IV trips. We provide teacher accompaniment, all safety protocols, and proper documentation for school approvals. Typical groups are 50–500 students. Popular destinations: Rajasthan, Delhi, Goa. What's your school location and tentative month?",
  'college tour': "Awesome! College tours are our specialty 🎉 We do farewell trips, cultural tours, and adventure packages. Very budget-friendly with group discounts. How many students and which destination are you thinking?",
  'family holiday': "Family trips are our favorites ❤️ We customize for all ages — activities for kids, comfort for parents. Top picks: Kerala (relaxing), Goa (beaches), Rajasthan (heritage). What's your family size?",
  'corporate outing': "We've organized outings for 10 to 500 employees! Full corporate invoice, GST billing, team activities included. Manali, Coorg, and Goa are top picks. What's your approximate group size and budget?",
  'personal trip': "Solo, couple, or friend group — we've got you! Tell me your dream destination and budget, and I'll build the perfect itinerary just for you. Where do you want to go?",
  'default': "Thanks for reaching out! 😊 Our travel experts will contact you very soon. Or you can WhatsApp us directly at +91 98765 43210 for instant replies!"
};

window.quickReply = function(text) {
  document.getElementById('chatOptions').style.display = 'none';
  addMsg(text, 'user');
  const key = text.toLowerCase();
  const reply = botReplies[key] || botReplies['default'];
  setTimeout(() => {
    addBot(reply);
  }, 700);
}

window.sendChat = function() {
  const inp = document.getElementById('chatInput');
  const txt = inp.value.trim();
  if (!txt) return;

  addMsg(txt, 'user');
  inp.value = '';
  document.getElementById('chatOptions').style.display = 'none';

  const lower = txt.toLowerCase();
  let reply = botReplies['default'];

  if (lower.includes('goa')) {
    reply = "Goa is amazing! 🏖️ Our 3N/4D Goa package starts at ₹6,499/person including hotel, transport and sightseeing. Group discounts available for 10+ people. Want me to send you the full itinerary?";
  } else if (lower.includes('manali')) {
    reply = "Manali is perfect for adventure lovers! ⛰️ Our 4N/5D package from ₹8,299/person covers Rohtang Pass, river rafting, and bonfires. What's your group size?";
  } else if (lower.includes('price') || lower.includes('cost') || lower.includes('budget')) {
    reply = "Our prices start as low as ₹3,000/person for short trips and go up based on destination, duration & comfort level. Share your destination and group size for an exact quote!";
  } else if (lower.includes('whatsapp') || lower.includes('call') || lower.includes('contact')) {
    reply = "Sure! 📞 Call/WhatsApp us directly: +91 98765 43210 — we're available 9 AM to 9 PM, 7 days a week. Or fill the enquiry form on this page for a callback!";
  } else if (lower.includes('kerala')) {
    reply = "Kerala is magical! 🌴 Our 4N/5D Kerala package from ₹9,499/person includes houseboat stay, tea gardens, and wildlife sanctuary. Perfect for couples and families!";
  } else if (lower.includes('rajasthan')) {
    reply = "Rajasthan is incredible! 🏯 Our 5N/6D heritage tour from ₹4,299/student is perfect for school groups. Covers Jaipur, Jodhpur, Udaipur with educational value!";
  } else if (lower.includes('ladakh') || lower.includes('leh')) {
    reply = "Ladakh is breathtaking! 🌌 Our 6N/7D expedition from ₹14,999/person covers Pangong Lake, Nubra Valley, and monasteries. Bike tours available!";
  } else if (lower.includes('kashmir')) {
    reply = "Kashmir is paradise! ❄️ Our 5N/6D package from ₹11,999/person includes Dal Lake shikara, Gulmarg gondola, and Pahalgam valleys. Absolutely stunning!";
  }

  setTimeout(() => {
    addBot(reply);
  }, 700);
}

// Form Submission
window.submitForm = function() {
  const name = document.getElementById('fname').value;
  const phone = document.getElementById('fphone').value;
  const type = document.getElementById('ftype').value;

  if (!name || !phone || !type) {
    alert('Please fill in Name, Phone, and Trip Type at minimum.');
    return;
  }

  // Show success message directly (no backend needed for now)
  document.getElementById('formContent').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';
  
  // Reset form after 3 seconds
  setTimeout(() => {
    document.getElementById('fname').value = '';
    document.getElementById('fphone').value = '';
    document.getElementById('femail').value = '';
    document.getElementById('ftype').value = '';
    document.getElementById('fdest').value = '';
    document.getElementById('fsize').value = '';
    document.getElementById('fdate').value = '';
    document.getElementById('fbudget').value = '';
    document.getElementById('fnotes').value = '';
    document.getElementById('formContent').style.display = 'block';
    document.getElementById('successMsg').style.display = 'none';
  }, 3000);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Initialize chat on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Leisure Vihang website loaded successfully!');
});
