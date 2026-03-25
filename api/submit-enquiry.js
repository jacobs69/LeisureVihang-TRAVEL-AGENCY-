// Vercel Serverless Function to handle form submissions
// This file should be placed in /api/submit-enquiry.js

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      phone,
      email,
      tripType,
      destination,
      groupSize,
      departureDate,
      budget,
      specialRequirements,
      timestamp
    } = req.body;

    // Validate required fields
    if (!name || !phone || !tripType) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    // Here you can:
    // 1. Send email notification
    // 2. Save to database
    // 3. Send WhatsApp message
    // 4. Log to analytics

    // Example: Log the enquiry
    console.log('New Enquiry Received:', {
      name,
      phone,
      email,
      tripType,
      destination,
      groupSize,
      departureDate,
      budget,
      specialRequirements,
      timestamp
    });

    // TODO: Integrate with your backend services:
    // - Send email via SendGrid/Mailgun
    // - Save to MongoDB/Firebase
    // - Send WhatsApp via Twilio
    // - Log to analytics

    return res.status(200).json({ 
      success: true, 
      message: 'Enquiry submitted successfully',
      enquiryId: `ENQ-${Date.now()}`
    });

  } catch (error) {
    console.error('Error processing enquiry:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
}
