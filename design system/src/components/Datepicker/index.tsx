import { createElement, useCallback, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import {
  CalendarContainer,
  DatepickerCalendarIcon,
  Day,
  MonthHeader,
  Navigation,
  NavigationButton,
  StyledDatePicker,
  Year,
} from './styles';
import { Input, type InputProps } from '../Input';
import { format, isValid } from 'date-fns';
import type { TSize } from '../../types/common.types';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';

export interface DatepickerProps
  extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value: Date | null;
  onChange: (date: Date | null) => void;
  dateFormat?: string;
  size?: TSize;
  restrictFutureYears?: boolean;
}

export const Datepicker = ({
  value,
  onChange,
  label,
  size = 'md',
  insideLabel = false,
  name,
  dateFormat = 'dd.MM.yyyy',
  restrictFutureYears = false,
  ...props
}: DatepickerProps) => {
  const [showYearPicker, setShowYearPicker] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [temporaryDate, setTemporaryDate] = useState<Date | null>(value);

  const handleChange = useCallback(
    (date: Date | null) => {
      if (showYearPicker) return;
      onChange(date);
      setIsOpen(false);
    },
    [onChange, showYearPicker]
  );

  const handleYearSelect = useCallback(
    (year: number) => {
      const baseDate = temporaryDate ?? value ?? new Date();
      const updatedDate = new Date(baseDate);
      updatedDate.setFullYear(year);
      setTemporaryDate(updatedDate);
      setShowYearPicker(false);
    },
    [temporaryDate, value]
  );

  const formatDate = useCallback(
    (date: Date | null) => {
      if (!date || !isValid(date)) return '';
      return format(date, dateFormat);
    },
    [dateFormat]
  );

  const renderCustomInput = (inputProps: InputProps) => (
    <div style={{ position: 'relative' }}>
      <Input
        {...inputProps}
        value={formatDate(value)}
        onChange={() => {}}
        onClick={() => {
          setTemporaryDate(value);
          setIsOpen(true);
        }}
        label={label}
        size={size}
        insideLabel={insideLabel}
        name={name}
        type="text"
        {...props}
      />

      <DatepickerCalendarIcon $size={size} $hasInsideLabel={insideLabel}>
        <Icon iconName={IconName.CALENDAR} />
      </DatepickerCalendarIcon>
    </div>
  );

  const handleYearPickerToggle = useCallback(() => {
    setShowYearPicker(prev => !prev);
  }, []);

  const maxDate = restrictFutureYears ? new Date() : undefined;

  return (
    <StyledDatePicker $size={size}>
      <ReactDatePicker
        selected={value}
        onChange={handleChange}
        customInput={createElement(renderCustomInput)}
        calendarContainer={CalendarContainer}
        showYearPicker={showYearPicker}
        open={isOpen}
        onCalendarClose={() => {
          setIsOpen(false);
          setShowYearPicker(false);
        }}
        onCalendarOpen={() => {
          setTemporaryDate(value);
          setIsOpen(true);
        }}
        dateFormat="dd.MM.yyyy"
        maxDate={maxDate}
        renderDayContents={day => <Day>{day}</Day>}
        renderYearContent={year => (
          <Year
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              handleYearSelect(year);
            }}
          >
            {year}
          </Year>
        )}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          decreaseYear,
          increaseYear,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          prevYearButtonDisabled,
          nextYearButtonDisabled,
        }) => (
          <Navigation>
            <NavigationButton
              type="button"
              onClick={e => {
                e.preventDefault();
                showYearPicker ? decreaseYear() : decreaseMonth();
              }}
              disabled={
                showYearPicker
                  ? prevYearButtonDisabled
                  : prevMonthButtonDisabled
              }
              $size={size}
            >
              <Icon iconName={IconName.ARROW_LEFT} />
            </NavigationButton>
            <MonthHeader onClick={handleYearPickerToggle}>
              {showYearPicker
                ? date.getFullYear()
                : `${date.toLocaleString('default', {
                    month: 'long',
                  })} ${date.getFullYear()}`}
            </MonthHeader>
            <NavigationButton
              type="button"
              onClick={e => {
                e.preventDefault();
                showYearPicker ? increaseYear() : increaseMonth();
              }}
              disabled={
                showYearPicker
                  ? nextYearButtonDisabled
                  : nextMonthButtonDisabled
              }
              $size={size}
            >
              <Icon iconName={IconName.ARROW_RIGHT} />
            </NavigationButton>
          </Navigation>
        )}
        openToDate={temporaryDate ?? undefined}
      />
    </StyledDatePicker>
  );
};
