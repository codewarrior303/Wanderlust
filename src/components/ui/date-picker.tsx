"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function DatePicker({
  value = "",
  onChange,
  placeholder = "Select departure date...",
  className,
  id,
  disabled = false,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse initial date from value or fallback to today
  const parseDateString = (str: string): Date => {
    if (!str) return new Date();
    // support MM/DD/YYYY, YYYY-MM-DD, or Month DD, YYYY
    const parsed = new Date(str);
    if (!isNaN(parsed.getTime())) return parsed;
    // try manual MM/DD/YYYY
    const parts = str.split("/");
    if (parts.length === 3) {
      const m = parseInt(parts[0], 10) - 1;
      const d = parseInt(parts[1], 10);
      const y = parseInt(parts[2], 10);
      return new Date(y, m, d);
    }
    return new Date();
  };

  const initialDate = parseDateString(value);
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear() || new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth() ?? new Date().getMonth());

  // Close calendar on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleSelectDay = (day: number) => {
    const mm = String(currentMonth + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    const yyyy = currentYear;
    const formatted = `${mm}/${dd}/${yyyy}`;
    onChange?.(formatted);
    setIsOpen(false);
  };

  const handleSelectToday = (e: React.MouseEvent) => {
    e.stopPropagation();
    const today = new Date();
    setCurrentYear(today.getFullYear());
    setCurrentMonth(today.getMonth());
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formatted = `${mm}/${dd}/${today.getFullYear()}`;
    onChange?.(formatted);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange?.("");
    setIsOpen(false);
  };

  // Check if a day is the currently selected date
  const isSelected = (day: number) => {
    if (!value) return false;
    const d = parseDateString(value);
    return (
      d.getDate() === day &&
      d.getMonth() === currentMonth &&
      d.getFullYear() === currentYear
    );
  };

  // Check if a day is today
  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  const totalDays = daysInMonth(currentYear, currentMonth);
  const startDay = firstDayOfMonth(currentYear, currentMonth);

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "w-full flex items-center justify-between px-3.5 h-12 rounded-xl text-sm transition-all border outline-none text-left",
          "bg-[#F8FAFC] dark:bg-neutral-900/60 border-[#EEEEEE] dark:border-[#26262A]",
          "hover:border-[#15A1BF]/60 focus:border-[#15A1BF] focus:ring-2 focus:ring-[#15A1BF]/20",
          isOpen && "border-[#15A1BF] ring-2 ring-[#15A1BF]/20",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <div className="flex items-center gap-2.5 truncate">
          <CalendarIcon className="h-4 w-4 text-[#15A1BF] shrink-0" />
          <span className={value ? "text-neutral-900 dark:text-neutral-100 font-medium" : "text-neutral-400"}>
            {value || placeholder}
          </span>
        </div>
        {value && !disabled && (
          <span
            onClick={handleClear}
            className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-full transition-colors text-neutral-400 hover:text-neutral-600"
            title="Clear date"
          >
            <X className="h-3.5 w-3.5" />
          </span>
        )}
      </button>

      {/* Floating Custom Calendar Popover */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 z-50 w-72 sm:w-80 p-4 rounded-2xl glass-panel shadow-2xl border border-white/80 dark:border-white/10 bg-white/95 dark:bg-[#141416]/95 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
          {/* Header Month / Year & Prev/Next */}
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
              {MONTH_NAMES[currentMonth]} {currentYear}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="h-7 w-7 rounded-lg flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="h-7 w-7 rounded-lg flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors"
                aria-label="Next month"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {DAYS_OF_WEEK.map((day) => (
              <span key={day} className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 py-1">
                {day}
              </span>
            ))}
          </div>

          {/* Calendar Day Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Empty offset days */}
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8 w-8" />
            ))}

            {/* Month days */}
            {Array.from({ length: totalDays }).map((_, i) => {
              const day = i + 1;
              const selected = isSelected(day);
              const today = isToday(day);

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleSelectDay(day)}
                  className={cn(
                    "h-8 w-8 mx-auto rounded-full flex items-center justify-center text-xs transition-all font-medium",
                    selected && today
                      ? "bg-[#15A1BF] text-white font-bold ring-2 ring-[#15A1BF] ring-offset-2 ring-offset-white dark:ring-offset-[#141416] shadow-md"
                      : selected
                      ? "bg-[#15A1BF] text-white font-bold shadow-md shadow-[#15A1BF]/30 scale-105"
                      : today
                      ? "bg-[#15A1BF]/20 text-[#15A1BF] font-extrabold ring-2 ring-[#15A1BF] shadow-xs"
                      : "text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  )}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Quick Action Footer */}
          <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={handleSelectToday}
              className="text-[#15A1BF] font-semibold hover:underline"
            >
              Today
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 font-medium"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
