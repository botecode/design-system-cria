import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextTitle1 } from '../TextTokens';
import { Card, CardHeader, CardContent } from '../Card';
import { DatePicker } from './index';

export const DatePickerDemo: React.FC = () => {
  const [single, setSingle] = useState<Date | null>(null);
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <div>
      <CriaTextHeadline1>Date Picker</CriaTextHeadline1>

      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Single Date</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <DatePicker value={single} onChange={(v)=>setSingle(v as Date)} />
        </CardContent>
      </Card>

      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Range</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <DatePicker range value={range} onChange={(v)=>setRange(v as [Date|null,Date|null])} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DatePickerDemo;


