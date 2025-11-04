-- Migration script for consultation_requests table
-- Run this to create the table needed for the consultation system

CREATE TABLE IF NOT EXISTS consultation_requests (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  services_interested JSONB,
  current_situation TEXT NOT NULL,
  urgency VARCHAR(20) NOT NULL CHECK (urgency IN ('normal', 'high', 'urgent')),
  preferred_contact VARCHAR(20) NOT NULL CHECK (preferred_contact IN ('email', 'phone', 'either')),
  additional_info TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'in_progress', 'completed', 'cancelled')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  notes TEXT
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_consultation_email ON consultation_requests(email);
CREATE INDEX IF NOT EXISTS idx_consultation_status ON consultation_requests(status);
CREATE INDEX IF NOT EXISTS idx_consultation_created ON consultation_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultation_urgency ON consultation_requests(urgency);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_consultation_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS consultation_updated_at_trigger ON consultation_requests;
CREATE TRIGGER consultation_updated_at_trigger
BEFORE UPDATE ON consultation_requests
FOR EACH ROW
EXECUTE FUNCTION update_consultation_updated_at();

-- Grant permissions (adjust as needed for your setup)
-- GRANT SELECT, INSERT, UPDATE ON consultation_requests TO your_app_user;
-- GRANT USAGE, SELECT ON SEQUENCE consultation_requests_id_seq TO your_app_user;



