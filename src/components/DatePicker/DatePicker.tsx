import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type DateLike = Date | null;

export type DatePickerValue = DateLike | [DateLike, DateLike];

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: DatePickerValue;
  onChange?: (value: DatePickerValue) => void;
  format?: 'dd.mm.yyyy' | 'mm/dd/yyyy' | 'iso';
  placeholder?: string;
  range?: boolean;
  minDate?: Date;
  maxDate?: Date;
  disabledDate?: (d: Date) => boolean;
  label?: string;
}

function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function endOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth()+1, 0); }
function addMonths(d: Date, n: number) { return new Date(d.getFullYear(), d.getMonth()+n, 1); }
function sameDay(a: Date, b: Date) { return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }

function formatDate(d: Date, format: NonNullable<DatePickerProps['format']>) {
  const dd = String(d.getDate()).padStart(2,'0');
  const mm = String(d.getMonth()+1).padStart(2,'0');
  const yyyy = d.getFullYear();
  switch (format) {
    case 'dd.mm.yyyy': return `${dd}.${mm}.${yyyy}`;
    case 'mm/dd/yyyy': return `${mm}/${dd}/${yyyy}`;
    case 'iso': default: return `${yyyy}-${mm}-${dd}`;
  }
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  format = 'dd.mm.yyyy',
  placeholder = 'Select date',
  range = false,
  minDate,
  maxDate,
  disabledDate,
  label,
  className = '',
  ...inputProps
}) => {
  const [open, setOpen] = useState(false);
  const today = useMemo(()=>new Date(),[]);
  const initial = Array.isArray(value) ? (value[0] ?? today) : (value ?? today) || today;
  const [view, setView] = useState<Date>(startOfMonth(initial instanceof Date ? initial : today));
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedStart: DateLike = Array.isArray(value) ? value[0] : (Array.isArray(value) ? null : value ?? null);
  const selectedEnd: DateLike = Array.isArray(value) ? value[1] : null;

  const days = useMemo(()=>{
    const start = startOfMonth(view);
    const end = endOfMonth(view);
    const startWeekday = (start.getDay()+6)%7; // make Monday=0
    const total = startWeekday + end.getDate();
    const rows = Math.ceil(total/7);
    const out: Date[] = [];
    const first = new Date(start);
    first.setDate(first.getDate() - startWeekday);
    for (let i=0;i<rows*7;i++) {
      const d = new Date(first);
      d.setDate(first.getDate()+i);
      out.push(d);
    }
    return out;
  },[view]);

  const isDisabled = useCallback((d: Date) => {
    if (minDate && d < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true;
    if (maxDate && d > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true;
    if (disabledDate && disabledDate(d)) return true;
    return false;
  },[minDate,maxDate,disabledDate]);

  const commitSingle = (d: Date) => {
    if (isDisabled(d)) return;
    onChange?.(d);
    setOpen(false);
    inputRef.current?.focus();
  };

  const commitRange = (d: Date) => {
    if (isDisabled(d)) return;
    const start = selectedStart as DateLike;
    const end = selectedEnd as DateLike;
    if (!start || (start && end)) {
      onChange?.([d, null]);
    } else {
      if (start && d < start) {
        onChange?.([d, start]);
      } else {
        onChange?.([start, d]);
        setOpen(false);
        inputRef.current?.focus();
      }
    }
  };

  const handleDayClick = (d: Date) => {
    if (range) commitRange(d); else commitSingle(d);
  };

  useEffect(()=>{
    const onDoc = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return ()=>document.removeEventListener('mousedown', onDoc);
  },[]);

  const displayValue = useMemo(()=>{
    if (Array.isArray(value)) {
      const [s,e] = value;
      if (s && e) return `${formatDate(s, format)} – ${formatDate(e, format)}`;
      if (s) return `${formatDate(s, format)} – `;
      return '';
    }
    return value ? formatDate(value, format) : '';
  },[value, format]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open && (e.key==='ArrowDown' || e.key==='Enter' || e.key===' ')) {
      e.preventDefault();
      setOpen(true);
      return;
    }
  };

  return (
    <div className={["cria-date-picker", className].filter(Boolean).join(' ')} ref={containerRef}>
      {label && (
        <label className="cria-date-picker__label">{label}</label>
      )}
      <input
        ref={inputRef}
        className="cria-date-picker__input"
        value={displayValue}
        placeholder={placeholder}
        onFocus={()=>setOpen(true)}
        onClick={()=>setOpen(true)}
        onKeyDown={onKeyDown}
        readOnly
        aria-haspopup="dialog"
        aria-expanded={open}
        {...inputProps}
      />

      {open && (
        <div className="cria-calendar" role="dialog" aria-modal="false" aria-label="Date picker">
          <div className="cria-calendar__header">
            <button className="cria-calendar__nav" onClick={()=>setView(addMonths(view,-1))} aria-label="Previous month">‹</button>
            <div className="cria-calendar__month" aria-live="polite">{view.toLocaleString(undefined,{month:'long'})} {view.getFullYear()}</div>
            <button className="cria-calendar__nav" onClick={()=>setView(addMonths(view,1))} aria-label="Next month">›</button>
          </div>
          <div className="cria-calendar__weekdays">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d=> (
              <div key={d} className="cria-calendar__weekday" aria-hidden="true">{d}</div>
            ))}
          </div>
          <div className="cria-calendar__grid" role="grid">
            {days.map((d,i)=>{
              const inMonth = d.getMonth()===view.getMonth();
              const disabled = !inMonth || isDisabled(d);
              const isStart = selectedStart instanceof Date && sameDay(d, selectedStart);
              const isEnd = selectedEnd instanceof Date && sameDay(d, selectedEnd);
              const inRange = range && selectedStart instanceof Date && selectedEnd instanceof Date && d>=selectedStart && d<=selectedEnd;
              const isToday = sameDay(d, today);
              return (
                <button
                  key={i}
                  role="gridcell"
                  className={[
                    'cria-calendar__day',
                    inMonth ? '' : 'cria-calendar__day--outside',
                    disabled ? 'cria-calendar__day--disabled' : '',
                    isStart ? 'cria-calendar__day--start' : '',
                    isEnd ? 'cria-calendar__day--end' : '',
                    inRange ? 'cria-calendar__day--in-range' : '',
                    isToday ? 'cria-calendar__day--today' : ''
                  ].filter(Boolean).join(' ')}
                  onClick={()=>handleDayClick(d)}
                  disabled={disabled}
                  aria-label={d.toDateString()}
                  aria-current={isToday ? 'date' : undefined}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;


