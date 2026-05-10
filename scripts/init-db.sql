-- Initialize portfolio_db database
-- This runs automatically when the container first starts

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  content TEXT,
  thumbnail TEXT,
  gallery TEXT[],
  tags TEXT[],
  live_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT false,
  published_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Settings table
CREATE TABLE IF NOT EXISTS settings (
  key VARCHAR(100) PRIMARY KEY,
  value JSONB
);

-- Insert sample projects
INSERT INTO projects (title, slug, description, content, thumbnail, gallery, tags, live_url, github_url, featured) VALUES
(
  'E-Commerce Platform',
  'ecommerce-platform',
  'Full-stack modern e-commerce solution with real-time inventory and Stripe integration.',
  'Built a complete e-commerce platform featuring product management, cart functionality, Stripe payment integration, order tracking, and an admin dashboard. Used Next.js for the frontend and API routes, PostgreSQL for data persistence.',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
  ARRAY['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'],
  ARRAY['Next.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
  'https://shop.example.com',
  'https://github.com/supernand/ecommerce',
  true
),
(
  'Real-time Chat Application',
  'realtime-chat',
  'WebSocket-powered chat with rooms, media sharing, andTyping indicators.',
  'Developed a real-time chat application supporting multiple chat rooms, direct messaging, typing indicators, and media sharing. Implemented using Socket.io for real-time communication and React for the UI.',
  'https://images.unsplash.com/photo-1611746872915-35082a6e3c3a?w=800',
  ARRAY['https://images.unsplash.com/photo-1611746872915-35082a6e3c3a?w=800'],
  ARRAY['React', 'Socket.io', 'Node.js', 'WebSocket'],
  'https://chat.example.com',
  'https://github.com/supernand/chat-app',
  false
),
(
  'AI Content Generator',
  'ai-content-generator',
  'OpenAI-powered content creation tool with brand voice customization.',
  'Built an AI-powered content generation tool that helps marketers create on-brand content. Features include brand voice training, multiple content types, and export options. Deployed on Vercel Edge Functions.',
  'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800',
  ARRAY['https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800'],
  ARRAY['Next.js', 'OpenAI', 'Vercel', 'TypeScript'],
  'https://ai-content.example.com',
  'https://github.com/supernand/ai-content',
  true
),
(
  'Mobile Fitness Tracker',
  'fitness-tracker',
  'Cross-platform fitness app with workout logging, progress charts, and social features.',
  'Created a cross-platform fitness tracking application with workout logging, progress visualization, custom exercise creation, and social features. Used React Native for the mobile app and Firebase for backend.',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
  ARRAY['https://images.unsplash.com/photo-1517836357463-d25dfea3438?w=800'],
  ARRAY['React Native', 'Firebase', 'Charts', 'TypeScript'],
  'https://fitness.example.com',
  'https://github.com/supernand/fitness-tracker',
  false
)
ON CONFLICT (slug) DO NOTHING;
