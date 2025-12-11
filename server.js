import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', server: 'active' });
});

// API Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, message } = req.body;

    console.log(`[${new Date().toISOString()}] Received contact form submission from: ${email}`);

    // Basic validation
    if (!name || !email || !message) {
        console.warn('Validation failed:', { name, email, message });
        return res.status(400).json({ error: 'Please fill in all required fields.' });
    }

    try {
        // Configure email transporter
        // NOTE: User must provide EMAIL_USER and EMAIL_PASS in .env for this to work
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or another service
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Send to self by default
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Message:
        ${message}
      `,
        };

        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
            res.status(200).json({ message: 'Message sent successfully!' });
        } else {
            console.warn('Email credentials not found in .env. Logging message only.');
            // Simulate success for dev/demo purposes even without credentials
            setTimeout(() => {
                res.status(200).json({ message: 'Message received (Email not sent - Missing credentials)!' });
            }, 1000); // Fake delay
        }

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message.' });
    }
});

// Only start the server if running directly (local dev)
// In Vercel, we export the app for the serverless function
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

// Serve static files from the React app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

export default app;
