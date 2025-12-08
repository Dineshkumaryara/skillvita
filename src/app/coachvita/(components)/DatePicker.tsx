import React, { useState, useEffect, useRef } from 'react';

interface DatePickerProps {
  onDateSelect: (date: string) => void;
  selectedDate: string;
}

interface CalendarDay {
  date: Date;
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isPastDate: boolean;
}

const DatePicker: React.FC<DatePickerProps> = ({ onDateSelect, selectedDate }): React.ReactNode => {
  // Get current date for initialization
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Reset time part for accurate comparisons
  
  const [activeDate, setActiveDate] = useState<Date>(currentDate);
  const [showMonthDropdown, setShowMonthDropdown] = useState<boolean>(false);
  const [showYearDropdown, setShowYearDropdown] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Generate year range (current year to 5 years ahead)
  const currentYear = currentDate.getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => currentYear + i);

  // Month names array
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Day names array
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Format date string for display
  const formatDateString = (date: Date): string => {
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Parse selected date string back to Date object
  const parseSelectedDate = (): Date | null => {
    if (!selectedDate) return null;
    
    const parts = selectedDate.split(' ');
    if (parts.length < 2) return null;
    
    const day = parseInt(parts[0], 10);
    const monthName = parts[1];
    const year = parts.length > 2 ? parseInt(parts[2], 10) : currentYear;
    
    const monthIndex = monthNames.findIndex(m => m === monthName);
    if (monthIndex < 0) return null;
    
    return new Date(year, monthIndex, day);
  };

  const toggleCalendar = (): void => {
    setShowCalendar(!showCalendar);
    setShowMonthDropdown(false);
    setShowYearDropdown(false);
  };

  const selectDate = (date: Date): void => {
    // Don't allow selection of past dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date.getTime() >= today.getTime()) {
      const formattedDate = formatDateString(date);
      onDateSelect(formattedDate);
      setShowCalendar(false);
    }
  };

  const handlePrevMonth = () => {
    setActiveDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      
      // Don't allow navigation to past months if current month is showing
      const today = new Date();
      if (newDate.getFullYear() < today.getFullYear() || 
         (newDate.getFullYear() === today.getFullYear() && newDate.getMonth() < today.getMonth())) {
        return prevDate;
      }
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setActiveDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const selectMonth = (monthIndex: number) => {
    setActiveDate(prevDate => {
      const today = new Date();
      const newDate = new Date(prevDate);
      
      // Don't allow selection of past months in current year
      if (newDate.getFullYear() === today.getFullYear() && monthIndex < today.getMonth()) {
        newDate.setMonth(today.getMonth());
      } else {
        newDate.setMonth(monthIndex);
      }
      
      return newDate;
    });
    setShowMonthDropdown(false);
  };

  const selectYear = (year: number) => {
    setActiveDate(prevDate => {
      const today = new Date();
      const newDate = new Date(prevDate);
      newDate.setFullYear(year);
      
      // If selecting current year, ensure month isn't in the past
      if (year === today.getFullYear() && newDate.getMonth() < today.getMonth()) {
        newDate.setMonth(today.getMonth());
      }
      
      return newDate;
    });
    setShowYearDropdown(false);
  };

  // Generate calendar days for the current month
  useEffect(() => {
    const generateCalendarDays = () => {
      const year = activeDate.getFullYear();
      const month = activeDate.getMonth();
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // First day of the month
      const firstDayOfMonth = new Date(year, month, 1);
      // Last day of the month
      const lastDayOfMonth = new Date(year, month + 1, 0);
      
      const daysInMonth = lastDayOfMonth.getDate();
      const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.
      
      const calendarDaysArray: CalendarDay[] = [];
      
      // Add days from previous month to fill the first week
      const prevMonthLastDay = new Date(year, month, 0).getDate();
      for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        const dayNumber = prevMonthLastDay - i;
        const date = new Date(year, month - 1, dayNumber);
        calendarDaysArray.push({
          date,
          day: dayNumber,
          month: month - 1,
          year: year,
          isCurrentMonth: false,
          isPastDate: date.getTime() < today.getTime()
        });
      }
      
      // Add days for the current month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        calendarDaysArray.push({
          date,
          day: day,
          month: month,
          year: year,
          isCurrentMonth: true,
          isPastDate: date.getTime() < today.getTime()
        });
      }
      
      // Add days from next month to complete the last week
      const remainingDays = 42 - calendarDaysArray.length; // 6 rows × 7 days = 42
      for (let day = 1; day <= remainingDays; day++) {
        const date = new Date(year, month + 1, day);
        calendarDaysArray.push({
          date,
          day: day,
          month: month + 1,
          year: year,
          isCurrentMonth: false,
          isPastDate: false // Future dates are never past
        });
      }
      
      setCalendarDays(calendarDaysArray);
    };
    
    generateCalendarDays();
  }, [activeDate]);

  // Initialize with selected date if present
  useEffect(() => {
    const parsedDate = parseSelectedDate();
    if (parsedDate) {
      setActiveDate(parsedDate);
    } else {
      // If no date is selected, set to today or next available day
      setActiveDate(currentDate);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check if a date is today
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  // Check if a date is the selected date
  const isSelectedDate = (date: Date): boolean => {
    const parsedDate = parseSelectedDate();
    if (!parsedDate) return false;
    
    return date.getDate() === parsedDate.getDate() &&
      date.getMonth() === parsedDate.getMonth() &&
      date.getFullYear() === parsedDate.getFullYear();
  };

  return (
    <div className="relative" ref={datePickerRef}>
      <label className="flex text-sm font-medium text-gray-700 mb-1">
        Schedule<span className="text-red-500">*</span>
      </label>
      <div className="relative">
        {/* Date input display */}
        <div 
          onClick={toggleCalendar}
          className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-md bg-white cursor-pointer"
        >
          <span className={`${selectedDate ? 'text-gray-800' : 'text-gray-500'}`}>
            {selectedDate || 'Select Date'}
          </span>
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24">
            <rect width="18" height="15" x="3" y="6" stroke="currentColor" strokeWidth="1.5" rx="2"/>
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 11h16M9 16h6M8 3v4M16 3v4"/>
          </svg>
        </div>
        
        {/* Calendar dropdown - Positioned ABOVE the input */}
        {showCalendar && (
          <div className="absolute z-30 w-full md:w-[320px] right-0 bottom-[calc(100%+10px)] bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            {/* Header with improved styling for August */}
            <div className="flex items-center justify-between p-3 border-b border-gray-200 relative bg-white">
              <div className="flex items-center">
                {/* Month/Year display with improved styling */}
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      setShowMonthDropdown(!showMonthDropdown);
                      setShowYearDropdown(false);
                    }}
                    className="text-lg font-bold text-gray-800 mr-2 px-2 py-1 rounded hover:bg-gray-100 flex items-center"
                  >
                    {monthNames[activeDate.getMonth()]}
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => {
                      setShowYearDropdown(!showYearDropdown);
                      setShowMonthDropdown(false);
                    }}
                    className="text-lg font-bold text-gray-800 px-2 py-1 rounded hover:bg-gray-100 flex items-center"
                  >
                    {activeDate.getFullYear()}
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-4 z-10">
                <button 
                  type="button" 
                  onClick={handlePrevMonth}
                  className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M9 3L5 7.5L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  type="button" 
                  onClick={handleNextMonth}
                  className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M6 3L10 7.5L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              {/* Month dropdown with improved styling */}
              {showMonthDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-40">
                  <div className="py-1 max-h-[220px] overflow-y-auto grid grid-cols-3">
                    {monthNames.map((month, index) => {
                      // Disable past months in current year
                      const isPastMonth = activeDate.getFullYear() === currentDate.getFullYear() && 
                                         index < currentDate.getMonth();
                      
                      return (
                        <div 
                          key={month}
                          className={`px-3 py-2 text-sm text-center cursor-pointer hover:bg-gray-100 ${
                            index === activeDate.getMonth() ? 'text-purple-600 font-medium' : 
                            isPastMonth ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'
                          }`}
                          onClick={() => !isPastMonth && selectMonth(index)}
                        >
                          {month.slice(0, 3)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {/* Year dropdown with improved styling */}
              {showYearDropdown && (
                <div className="absolute top-full left-[100px] mt-1 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-40">
                  <div className="py-1 max-h-[220px] overflow-y-auto">
                    {years.map(year => (
                      <div 
                        key={year}
                        className={`px-4 py-2 text-sm text-center cursor-pointer hover:bg-gray-100 ${
                          year === activeDate.getFullYear() ? 'text-purple-600 font-medium' : 'text-gray-700'
                        }`}
                        onClick={() => selectYear(year)}
                      >
                        {year}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-0 text-center py-2 px-2">
              {dayNames.map(day => (
                <div key={day} className="text-xs font-medium text-gray-500">{day}</div>
              ))}
            </div>
            
            {/* Calendar body - days grid */}
            <div className="p-2">
              <div className="grid grid-cols-7 gap-1 text-center">
                {calendarDays.map((dayData, index) => (
                  <div 
                    key={index}
                    onClick={() => dayData.isCurrentMonth && !dayData.isPastDate && selectDate(dayData.date)}
                    className={`
                      w-10 h-10 flex items-center justify-center text-sm rounded-full 
                      ${!dayData.isCurrentMonth ? 'text-gray-300' : 
                        dayData.isPastDate ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'}
                      ${isToday(dayData.date) && dayData.isCurrentMonth ? 'border border-purple-500' : ''}
                      ${isSelectedDate(dayData.date) ? 'bg-purple-500 text-white' : ''}
                    `}
                  >
                    {dayData.day}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Today button */}
            <div className="p-2 border-t border-gray-200 flex justify-end">
              <button
                type="button"
                onClick={() => selectDate(new Date())}
                className="text-purple-600 hover:underline text-sm font-medium py-1 px-2"
              >
                Today
              </button>
            </div>
          </div>
        )}
        
        {/* Hidden input for form submission */}
        <input 
          type="hidden"
          name="schedule"
          value={selectedDate}
          required
        />
      </div>
    </div>
  );
};

export default DatePicker;