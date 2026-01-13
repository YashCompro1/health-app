'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { VitalType } from '@/types/health';

export function AddVitalForm() {
  const [date, setDate] = useState<Date>(new Date());
  const [vitalType, setVitalType] = useState<VitalType>('blood_pressure');
  const [showBPFields, setShowBPFields] = useState(true);

  const handleVitalTypeChange = (value: VitalType) => {
    setVitalType(value);
    setShowBPFields(value === 'blood_pressure');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Record New Vital</CardTitle>
        <CardDescription>Track your health measurements</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="vital-type">Vital Type</Label>
            <Select value={vitalType} onValueChange={(value) => handleVitalTypeChange(value as VitalType)}>
              <SelectTrigger id="vital-type">
                <SelectValue placeholder="Select vital type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blood_pressure">Blood Pressure</SelectItem>
                <SelectItem value="heart_rate">Heart Rate</SelectItem>
                <SelectItem value="glucose">Blood Glucose</SelectItem>
                <SelectItem value="weight">Weight</SelectItem>
                <SelectItem value="temperature">Body Temperature</SelectItem>
                <SelectItem value="oxygen_saturation">Oxygen Saturation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {showBPFields ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="systolic">Systolic</Label>
                <Input id="systolic" type="number" placeholder="120" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="diastolic">Diastolic</Label>
                <Input id="diastolic" type="number" placeholder="80" />
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="value">Value</Label>
              <Input id="value" type="number" placeholder="Enter value" />
            </div>
          )}

          <div className="space-y-2">
            <Label>Date & Time</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(day) => day && setDate(day)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea id="notes" placeholder="Add any relevant notes..." />
          </div>

          <Button type="submit" className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Add Vital
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
