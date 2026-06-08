import React, { ChangeEvent, FC } from 'react';
import {
  Dot,
  Label,
  RangeInput,
  SliderContainer,
  SliderThumb,
  SliderTrack,
  Tick,
} from './stlyles';

export type RangeSliderProps = {
  min: number;
  max: number;
  value: number;
  step?: number;
  onChange: (value: number) => void;
};

const RangeSlider: FC<RangeSliderProps> = ({
  min,
  max,
  value,
  step = 1,
  onChange,
}) => {
  const valuePercent = ((value - min) / (max - min)) * 100;

  const calculateThumbOffset = (currentValue: number) => {
    const range = max - min;
    let percentage = ((currentValue - min) / range) * 100;

    if (currentValue === min) {
      percentage = 8;
    }

    if (currentValue === max) {
      percentage = 93;
    }

    return `calc(${percentage}% - 12px)`;
  };

  const calculateVisibleTicks = (
    currentValue: number,
    min: number,
    max: number,
    step: number
  ) => {
    const totalTicks = Math.floor((max - min) / step) + 1;
    const currentIndex = Math.floor((currentValue - min) / step);

    let start = Math.max(currentIndex - 2, 0);
    let end = start + 5;

    if (end > totalTicks) {
      end = totalTicks;
      start = Math.max(end - 5, 0);
    }

    return Array.from(
      { length: end - start },
      (_, i) => min + (start + i) * step
    );
  };

  const visibleTicks = calculateVisibleTicks(value, min, max, step);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(event.target.value, 10));
  };

  return (
    <SliderContainer>
      <SliderTrack $valuePercent={valuePercent}>
        <SliderThumb style={{ left: calculateThumbOffset(value) }} />
        <RangeInput
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
        />
      </SliderTrack>

      {visibleTicks.map((tick, index) => (
        <React.Fragment key={tick}>
          <Tick
            $position={`${((tick - min) / (max - min)) * 100}%`}
            $isFirst={index === 0}
            $isLast={index === visibleTicks.length - 1}
          />
          <Dot
            $position={`${((tick - min) / (max - min)) * 100}%`}
            $isFirst={index === 0}
            $isLast={index === visibleTicks.length - 1}
          />
          <Label $position={`${((tick - min) / (max - min)) * 100 - 10}%`}>
            {tick}
          </Label>
        </React.Fragment>
      ))}
    </SliderContainer>
  );
};

export default RangeSlider;
