import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Card, CardHeader, CardContent } from '../Card';
import { DatePicker } from './index';

export const DatePickerDemo: React.FC = () => {
  const [single, setSingle] = useState<Date | null>(null);
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <div>
      <Typography variant="h2">Date Picker</Typography>

      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Single Date</Typography>
        </CardHeader>
        <CardContent>
          <DatePicker value={single} onChange={(v)=>setSingle(v as Date)} />
        </CardContent>
      </Card>

      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Range</Typography>
        </CardHeader>
        <CardContent>
          <DatePicker range value={range} onChange={(v)=>setRange(v as [Date|null,Date|null])} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DatePickerDemo;


