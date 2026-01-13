# Health Tracking App

A comprehensive health monitoring application that helps users track their vitals, manage medical reports, and receive AI-powered health insights.

## Features

### 📊 **Vitals Tracking**
- Record and monitor blood pressure, heart rate, glucose levels, weight, and more
- View trends over time with interactive charts
- Get notified when measurements are outside normal ranges
- Set up automatic reminders for regular tracking

### 📄 **Medical Report Management**
- Securely upload and store medical reports (lab tests, imaging, prescriptions)
- Automatic categorization and organization
- Highlight abnormalities and key findings
- Easy search and retrieval of past reports

### 🤖 **AI Health Insights**
- Analyze vitals and reports to identify patterns and trends
- Receive personalized lifestyle recommendations
- Get alerts for potential health risks
- Non-diagnostic suggestions for diet, exercise, and follow-ups
- **Clear disclaimers** that insights are informational only

### 🔒 **Privacy & Security**
- End-to-end encryption for all health data
- Full user control over data sharing
- HIPAA and GDPR compliant design
- Biometric authentication support
- Two-factor authentication option

### 🔔 **Reminders & Notifications**
- Customizable reminders for vitals tracking
- Medication and appointment reminders
- Report upload notifications
- Flexible scheduling (daily, weekly, monthly, custom)

### 🤝 **Sharing & Export**
- Generate comprehensive health summaries
- Share reports with doctors or caregivers
- Password-protected shareable links
- Export data in portable formats
- Set expiration dates for shared links

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **UI Components:** shadcn/ui with Radix UI
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Date Handling:** date-fns

## Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd health-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Dashboard/home page
│   ├── vitals/add/        # Add vitals page
│   ├── reports/upload/    # Upload reports page
│   ├── settings/          # Settings page
│   └── share/             # Share health summary page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── vital-card.tsx    # Vital display card
│   ├── ai-insights.tsx   # AI insights panel
│   ├── trend-chart.tsx   # Chart visualization
│   ├── report-card.tsx   # Report display card
│   ├── add-vital-form.tsx
│   └── upload-report-form.tsx
├── lib/
│   ├── utils.ts          # Utility functions
│   └── mock-data.ts      # Sample data for UI
└── types/
    └── health.ts         # TypeScript type definitions
```

## Key Pages

- **Dashboard (`/`)** - Overview of health metrics, trends, and recent insights
- **Add Vitals (`/vitals/add`)** - Record new vital measurements
- **Upload Reports (`/reports/upload`)** - Upload medical documents
- **Settings (`/settings`)** - Privacy, notifications, profile, and data management
- **Share (`/share`)** - Generate and share health summaries

## UI Components

### Custom Components
- `VitalCard` - Display vital statistics with trend indicators
- `AIInsightsPanel` - Show AI-generated health recommendations
- `TrendChart` - Interactive line charts for tracking trends
- `ReportCard` - Display medical report summaries
- `AddVitalForm` - Form for recording vitals
- `UploadReportForm` - Drag-and-drop file upload

### shadcn/ui Components
All standard UI components (Button, Card, Dialog, Form, etc.) are from shadcn/ui

## Important Notes

### ⚠️ **Medical Disclaimer**
This application is a **UI prototype** for demonstration purposes. It provides:
- Informational insights only
- Non-diagnostic recommendations
- Educational content

**This app is NOT:**
- A replacement for professional medical advice
- A diagnostic tool
- A medical device

Always consult qualified healthcare professionals for medical decisions.

### 🎨 **Current Implementation**
This is a **front-end only** implementation with:
- Mock data for demonstration
- No backend or database
- No actual AI analysis
- No real authentication
- No file storage

For production use, you would need to add:
- Backend API (Node.js, Python, etc.)
- Database (PostgreSQL, MongoDB)
- Authentication (Auth0, Clerk, NextAuth)
- File storage (AWS S3, Cloudinary)
- AI/ML integration (OpenAI, custom models)
- Proper encryption and security

## Development

### Adding New Features
1. Create types in `src/types/`
2. Add mock data in `src/lib/mock-data.ts`
3. Build components in `src/components/`
4. Create pages in `src/app/`

### Styling
- Uses Tailwind CSS utility classes
- CSS variables for theming in `globals.css`
- Dark mode support via `next-themes`

## License

MIT License - See LICENSE file for details

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting PRs.

---

**Remember:** This app is for informational purposes only. Always seek professional medical advice for health concerns.
