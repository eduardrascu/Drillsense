import React, {
  type ChangeEvent,
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';

import { InfoText, InputLabel, InputWrapper } from '../Input/styles';
import {
  Textarea as CustomTextarea,
  TextareaContainer,
  TextareaPlaceholder,
} from './styles';

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  insideLabel?: boolean;
  required?: boolean;
  infoText?: string;
  errorText?: string;
  hasError?: boolean;
}

const size = 'lg';

export const Textarea = ({
  onChange,
  value,
  placeholder,
  label,
  insideLabel = true,
  required = false,
  name,
  infoText,
  errorText,
  rows = 4,
  hasError,
  ...props
}: TextareaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [hasValue, setHasValue] = useState(!!value);

  const showAsError = useMemo(() => {
    return hasError || !!errorText;
  }, [hasError, errorText]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e);
      setHasValue(!!e.target.value);
    },
    [onChange]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        container.setAttribute('data-focus-method', 'keyboard');
      }
    };

    const handleMouseDown = () => {
      container.setAttribute('data-focus-method', 'mouse');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <InputWrapper>
      {!insideLabel && label && (
        <InputLabel $isRequired={required} $size={size}>
          {label}
        </InputLabel>
      )}
      <TextareaContainer
        ref={containerRef}
        $isShowLabel={!!value}
        $insideLabel={insideLabel}
        $size={size}
        $hasError={showAsError}
        data-focus-method={undefined}
      >
        {insideLabel && label && (
          <TextareaPlaceholder
            $isShowLabel={!!value}
            $size={size}
            $hasError={showAsError}
            $hasValue={hasValue}
          >
            {label}
          </TextareaPlaceholder>
        )}

        <CustomTextarea
          ref={textareaRef}
          onChange={handleChange}
          placeholder={insideLabel && label ? undefined : placeholder}
          value={value}
          name={name}
          $hasLabel={insideLabel}
          $isShowLabel={!!value}
          $size={size}
          $hasError={showAsError}
          rows={rows}
          {...props}
        />
      </TextareaContainer>
      {(infoText || errorText) && (
        <InfoText $hasError={showAsError}>
          {errorText ? (
            <Icon iconName={IconName.DANGER_INFO} />
          ) : (
            <Icon iconName={IconName.SYSTEM_INFO} />
          )}{' '}
          {errorText || infoText}
        </InfoText>
      )}
    </InputWrapper>
  );
};
