// Example configuration for UptimeRobot or other monitoring services

/*
Uptime Monitoring Endpoints:

1. Backend Health Check:
   - URL: https://your-api-url.com/api/health
   - Method: GET
   - Expected Response: Status 200 OK
   - Monitoring Interval: 5 minutes
   - Alert Threshold: 5 minutes downtime

2. Frontend Main Page:
   - URL: https://your-frontend-url.com/
   - Method: GET
   - Expected Response: Status 200 OK
   - Monitoring Interval: 5 minutes
   - Alert Threshold: 5 minutes downtime

3. API Authentication Endpoint:
   - URL: https://your-api-url.com/api/auth/login
   - Method: POST
   - Headers: Content-Type: application/json
   - Body: {"email":"monitor@example.com","password":"monitor_password"}
   - Expected Response: Status 200 OK
   - Monitoring Interval: 15 minutes
   - Alert Threshold: 10 minutes downtime

Setup Instructions for UptimeRobot:
1. Create an account at uptimerobot.com
2. Add a new monitor for each endpoint listed above
3. Configure alert contacts (email, SMS, webhook)
4. Set up status page if desired

Additional Monitoring Services to Consider:
- Pingdom
- StatusCake
- New Relic
- Datadog
*/