'use client';

import { VitalCard } from '@/components/vital-card';
import { TrendChart } from '@/components/trend-chart';
import { AIInsightsPanel } from '@/components/ai-insights';
import { ReportCard } from '@/components/report-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockVitals, mockReports, mockInsights, mockBloodPressureTrend, mockGlucoseTrend, mockWeightTrend } from '@/lib/mock-data';
import { Activity, FileText, TrendingUp, Bell, Settings, Share2, Plus } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const latestVitals = mockVitals.slice(0, 4);
  const latestReports = mockReports.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">Health Tracker</h1>
            </div>
            <nav className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/settings">
                  <Settings className="h-5 w-5" />
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here's your health overview for today, January 13, 2026
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <VitalCard
            title="Blood Pressure"
            value="128/82"
            unit="mmHg"
            trend="up"
            status="warning"
            lastUpdated="2 hours ago"
          />
          <VitalCard
            title="Heart Rate"
            value="72"
            unit="bpm"
            trend="stable"
            status="normal"
            lastUpdated="2 hours ago"
          />
          <VitalCard
            title="Blood Glucose"
            value="95"
            unit="mg/dL"
            trend="stable"
            status="normal"
            lastUpdated="3 hours ago"
          />
          <VitalCard
            title="Weight"
            value="75.5"
            unit="kg"
            trend="down"
            status="normal"
            lastUpdated="4 hours ago"
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="vitals">Vitals</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              {/* Trends */}
              <TrendChart
                data={mockBloodPressureTrend}
                title="Blood Pressure Trend (7 Days)"
                description="Systolic pressure over time"
                unit="mmHg"
                color="#ef4444"
                referenceValue={120}
                referenceLabel="Normal (120)"
              />
              <TrendChart
                data={mockGlucoseTrend}
                title="Blood Glucose Trend (7 Days)"
                description="Fasting glucose levels"
                unit="mg/dL"
                color="#3b82f6"
                referenceValue={100}
                referenceLabel="Normal (<100)"
              />
            </div>

            {/* Recent Insights */}
            <AIInsightsPanel insights={mockInsights.slice(0, 2)} />

            {/* Recent Reports */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Medical Reports</CardTitle>
                  <CardDescription>Your latest uploaded documents</CardDescription>
                </div>
                <Button asChild>
                  <Link href="/reports/upload">
                    <Plus className="mr-2 h-4 w-4" />
                    Upload
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestReports.map((report) => (
                  <ReportCard key={report.id} report={report} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vitals" className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              <TrendChart
                data={mockWeightTrend}
                title="Weight Trend (30 Days)"
                description="Weekly weight measurements"
                unit="kg"
                color="#10b981"
              />
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Record your vitals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link href="/vitals/add">
                      <Plus className="mr-2 h-4 w-4" />
                      Record Blood Pressure
                    </Link>
                  </Button>
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link href="/vitals/add">
                      <Plus className="mr-2 h-4 w-4" />
                      Record Blood Glucose
                    </Link>
                  </Button>
                  <Button className="w-full justify-start" variant="outline" asChild>
                    <Link href="/vitals/add">
                      <Plus className="mr-2 h-4 w-4" />
                      Record Weight
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold">Medical Reports</h3>
                <p className="text-muted-foreground">All your uploaded medical documents</p>
              </div>
              <Button asChild>
                <Link href="/reports/upload">
                  <Plus className="mr-2 h-4 w-4" />
                  Upload Report
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {mockReports.map((report) => (
                <ReportCard key={report.id} report={report} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <AIInsightsPanel insights={mockInsights} />
          </TabsContent>
        </Tabs>

        {/* Quick Share Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Share Health Summary</CardTitle>
            <CardDescription>
              Generate a summary report to share with your healthcare provider
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/share">
                <Share2 className="mr-2 h-4 w-4" />
                Create Shareable Report
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            <strong>Medical Disclaimer:</strong> This app is for informational purposes only. 
            Always consult with qualified healthcare professionals for medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
