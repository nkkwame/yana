import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: [
    'http://localhost:3000', // yana-enterprises
    'http://localhost:3001', // yana-care
    'http://localhost:3002', // yana-mart
    'http://localhost:3003', // yana-learn
    'http://localhost:3004', // yana-studios
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'YANA Enterprises API Gateway',
    version: '1.0.0',
    services: {
      enterprises: 'Main landing page and company information',
      care: 'Hospital management system',
      mart: 'E-commerce marketplace',
      learn: 'E-learning platform',
      studios: 'Creative services platform'
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Service routes (will be expanded)
app.use('/api/enterprises', (req, res) => {
  res.json({ message: 'YANA Enterprises Service' });
});

app.use('/api/care', (req, res) => {
  res.json({ message: 'YANACare Hospital Management Service' });
});

app.use('/api/mart', (req, res) => {
  res.json({ message: 'YANA Mart E-commerce Service' });
});

app.use('/api/learn', (req, res) => {
  res.json({ message: 'YANA Learn E-learning Service' });
});

app.use('/api/studios', (req, res) => {
  res.json({ message: 'YANA Studios Creative Services' });
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 YANA Enterprises API Gateway running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🏢 Enterprises: http://localhost:${PORT}/api/enterprises`);
  console.log(`🏥 Care: http://localhost:${PORT}/api/care`);
  console.log(`🛒 Mart: http://localhost:${PORT}/api/mart`);
  console.log(`📚 Learn: http://localhost:${PORT}/api/learn`);
  console.log(`🎨 Studios: http://localhost:${PORT}/api/studios`);
});
