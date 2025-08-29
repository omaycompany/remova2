# 🔔 Real Notification System Setup Guide

## Overview
This implements a complete, production-ready notification system that integrates with your admin dashboard. **NO sample data** - all notifications are real and managed through proper APIs.

## 🗄️ Database Setup

### 1. Run the Notifications Table Migration

```bash
# Connect to your Heroku Postgres database
heroku pg:psql -a your-app-name

# Copy and paste the contents of create_notifications_table.sql
# This creates the notifications table with all necessary functions
```

The migration includes:
- `notifications` table with proper indexing
- Database functions for notification management
- Triggers for automatic timestamp updates
- Admin helper functions

### 2. Set Admin API Key (Required for Admin Integration)

```bash
# Set a secure admin API key for admin dashboard integration
heroku config:set ADMIN_API_KEY=your-secure-admin-key-here -a your-app-name
```

## 🔌 API Endpoints

### User Endpoints (Authenticated Users)

**GET `/api/notifications`**
- Fetch notifications for authenticated user
- Query params: `limit`, `offset`, `unread_only`
- Returns: notifications array, unread count, pagination info

**PATCH `/api/notifications`**
- Mark notifications as read
- Body: `{ notification_id: "uuid" }` or `{ mark_all: true }`

**GET `/api/auth/me`**
- Get current user info for profile dropdown
- Returns: user data for UI components

### Admin Endpoints (Admin Dashboard Integration)

**POST `/api/admin/notifications`**
- Create notification for any client
- Requires: `Authorization: Bearer YOUR_ADMIN_API_KEY`
- Body:
```json
{
  "client_id": "uuid",
  "title": "Notification Title",
  "message": "Notification message",
  "type": "success|warning|error|info",
  "category": "system|cbp_filing|takedown|data_leak|partner|billing|security",
  "priority": 1-10,
  "action_url": "/members/some-page",
  "action_label": "View Details",
  "expires_at": "2024-12-31T23:59:59Z",
  "created_by": "admin_name"
}
```

**GET `/api/admin/notifications`**
- Get all notifications for admin dashboard
- Requires: `Authorization: Bearer YOUR_ADMIN_API_KEY`
- Query params: `limit`, `offset`, `client_id`

**PATCH `/api/admin/notifications`**
- Bulk update notifications (mark read, delete)
- Requires: `Authorization: Bearer YOUR_ADMIN_API_KEY`
- Body: `{ notification_ids: ["uuid1", "uuid2"], action: "mark_read|delete" }`

## 🎯 Admin Dashboard Integration Examples

### Create Notification via API
```bash
curl -X POST https://your-app.herokuapp.com/api/admin/notifications \
  -H "Authorization: Bearer YOUR_ADMIN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "client-uuid-here",
    "title": "CBP Filing Approved",
    "message": "Your customs confidentiality filing has been approved and is now protecting your shipments.",
    "type": "success",
    "category": "cbp_filing",
    "priority": 8,
    "action_url": "/members/privacy-shield",
    "action_label": "View Protection Status",
    "created_by": "admin_sarah"
  }'
```

### Create Notification via Database Function
```sql
-- Direct database approach (for admin tools)
SELECT create_notification(
  'client-uuid-here',
  'Data Leak Detected',
  'We found your company data exposed on ImportGenius. Takedown request has been initiated.',
  'warning',
  'data_leak',
  9,
  '/members/data-leaks',
  'View Details',
  NULL,
  'system_monitor'
);
```

### Python Admin Script Example
```python
import requests
import os

ADMIN_API_KEY = os.getenv('ADMIN_API_KEY')
API_BASE = 'https://your-app.herokuapp.com/api/admin'

def create_notification(client_id, title, message, notification_type='info', category='system', priority=5):
    response = requests.post(
        f'{API_BASE}/notifications',
        headers={
            'Authorization': f'Bearer {ADMIN_API_KEY}',
            'Content-Type': 'application/json'
        },
        json={
            'client_id': client_id,
            'title': title,
            'message': message,
            'type': notification_type,
            'category': category,
            'priority': priority
        }
    )
    return response.json()

# Usage
result = create_notification(
    client_id='uuid-here',
    title='Welcome to Remova',
    message='Your protection services are now active.',
    notification_type='success',
    category='system',
    priority=8
)
```

## 🎨 UI Components

### NotificationDropdown
- Real-time notification fetching
- Auto-updates unread count
- Click to mark as read
- Action button integration
- Error handling with retry

### ProfileDropdown
- Dynamic client info loading
- Plan-specific UI elements
- Quick navigation to settings
- Secure sign-out handling

## 📋 Notification Categories & Types

### Categories
- `system` - General system notifications
- `cbp_filing` - CBP filing updates
- `takedown` - Takedown request updates
- `data_leak` - Data exposure alerts
- `partner` - Partner protection updates
- `billing` - Billing and subscription
- `security` - Security-related alerts

### Types
- `success` - Green, positive actions
- `info` - Blue, informational
- `warning` - Yellow, attention needed
- `error` - Red, critical issues

### Priority Levels
- `10` - Critical (immediate attention)
- `8-9` - High (important updates)
- `5-7` - Medium (standard notifications)
- `1-4` - Low (minor updates)

## 🔧 Admin Dashboard Integration

### Automatic Notifications
Set up your admin dashboard to automatically create notifications when:

1. **CBP Filing Status Changes**
```sql
-- Trigger example for CBP filing updates
CREATE OR REPLACE FUNCTION notify_cbp_status_change()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status != OLD.status THEN
    PERFORM create_notification(
      NEW.client_id,
      'CBP Filing Status Update',
      'Your CBP filing status has been updated to: ' || NEW.status,
      CASE NEW.status
        WHEN 'approved' THEN 'success'
        WHEN 'error' THEN 'error'
        ELSE 'info'
      END,
      'cbp_filing',
      8,
      '/members/privacy-shield',
      'View Status'
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

2. **Takedown Status Changes**
3. **Data Leaks Detected**
4. **Billing Events**
5. **Security Alerts**

### Manual Admin Notifications
Use the admin API to send:
- Service updates
- Maintenance notifications
- Personal messages from privacy reps
- Onboarding guidance
- Upgrade prompts

## 🚨 Security Notes

1. **Admin API Key**: Keep this secret and rotate regularly
2. **Authentication**: All user endpoints require valid session
3. **Authorization**: Admin endpoints require API key
4. **Input Validation**: All inputs are validated server-side
5. **SQL Injection**: Uses parameterized queries
6. **XSS Protection**: All content is properly escaped in UI

## ✅ Testing

### Test User Notifications
1. Login to dashboard
2. Check notification bell icon
3. Click to open dropdown
4. Test mark as read functionality

### Test Admin Integration
```bash
# Test admin notification creation
curl -X POST localhost:6161/api/admin/notifications \
  -H "Authorization: Bearer test-admin-key" \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "your-test-client-id",
    "title": "Test Notification",
    "message": "This is a test notification from admin",
    "type": "info"
  }'
```

## 🎉 Production Checklist

- [ ] Database migration applied
- [ ] Admin API key set in environment
- [ ] Admin dashboard can create notifications
- [ ] User notifications display correctly
- [ ] Profile dropdown works
- [ ] Mark as read functionality works
- [ ] Real-time updates working
- [ ] Error handling tested
- [ ] Performance tested with many notifications

This is a **complete, production-ready notification system** with no sample data dependencies!
