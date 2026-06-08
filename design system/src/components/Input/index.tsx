import {
  type ChangeEvent,
  DetailedHTMLProps,
  type HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { TSize } from '../../types/common.types';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';

import {
  IconCancelContainer,
  InfoText,
  Input as CustomInput,
  InputContainer,
  InputLabel,
  InputPlaceholder,
  InputWrapper,
  LeftContentContainer,
  LineBox,
  NumberControlButton,
  NumberControlsWrapper,
  PasswordToggleButton,
  RightContentContainer,
} from './styles';

export interface InputProps
  extends Omit<
    Omit<
      DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      'size'
    >,
    'onChange'
  > {
  insideLabel?: boolean;
  label?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: TSize;
  type?: HTMLInputTypeAttribute;
  infoText?: string;
  errorText?: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  showCloseIcon?: boolean;
  hasError?: boolean;
}

export const Input = ({
  onChange,
  value,
  placeholder,
  label,
  type = 'text',
  size = 'md',
  insideLabel = false,
  required = false,
  name,
  infoText,
  errorText,
  leftContent,
  rightContent,
  showCloseIcon = false,
  hasError,
  ...props
}: InputProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(!!value);
  const [isHovered, setIsHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const showAsError = useMemo(() => {
    return hasError || !!errorText;
  }, [hasError, errorText]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
      setHasValue(!!e.target.value);
    },
    [onChange]
  );

  const triggerChange = useCallback(
    (newValue: string) => {
      const event = {
        target: {
          name,
          value: newValue,
        },
      } as ChangeEvent<HTMLInputElement>;

      onChange(event);
      setHasValue(!!newValue);
    },
    [name, onChange]
  );

  const handleIncrement = useCallback(() => {
    if (inputRef.current) {
      const currentValue = Number(inputRef.current.value) || 0;
      const newValue = (currentValue + 1).toString();
      triggerChange(newValue);
    }
  }, [triggerChange]);

  const handleDecrement = useCallback(() => {
    if (inputRef.current) {
      const currentValue = Number(inputRef.current.value) || 0;
      const newValue = (currentValue - 1).toString();
      triggerChange(newValue);
    }
  }, [triggerChange]);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const handleResetValue = useCallback(() => {
    const event = {
      target: {
        name,
        value: '',
      },
    } as ChangeEvent<HTMLInputElement>;

    onChange(event);
    setHasValue(false);
  }, [name, onChange]);

  const inputType = useMemo(() => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }

    if (type === 'date') {
      return 'text';
    }

    return type;
  }, [showPassword, type]);

  const renderRightContent = useMemo(() => {
    if (type === 'number') {
      return (
        <NumberControlsWrapper>
          <NumberControlButton onClick={handleIncrement} aria-label="Increment">
            <Icon iconName={IconName.CHEVRON_UP} />
          </NumberControlButton>
          <NumberControlButton onClick={handleDecrement} aria-label="Decrement">
            <Icon iconName={IconName.CHEVRON_DOWN} />
          </NumberControlButton>
        </NumberControlsWrapper>
      );
    }

    if (type === 'password') {
      return (
        <PasswordToggleButton
          onClick={togglePasswordVisibility}
          type="button"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <Icon
            iconName={showPassword ? IconName.EYE_HIDE : IconName.EYE_SHOW}
          />
        </PasswordToggleButton>
      );
    }

    if (!['password', 'number'].includes(type) && rightContent) {
      return rightContent;
    }

    return null;
  }, [
    type,
    rightContent,
    handleIncrement,
    handleDecrement,
    togglePasswordVisibility,
    showPassword,
  ]);

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
      <InputContainer
        ref={containerRef}
        $isShowLabel={!!value}
        $insideLabel={insideLabel}
        $size={size}
        $hasError={showAsError}
        data-focus-method={undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {leftContent && (
          <LeftContentContainer>{leftContent}</LeftContentContainer>
        )}

        {insideLabel && label && (
          <InputPlaceholder
            $isShowLabel={!!value}
            $size={size}
            $hasError={showAsError}
            $hasLeftContent={!!leftContent}
            $hasValue={hasValue}
          >
            {label}
          </InputPlaceholder>
        )}

        <CustomInput
          ref={inputRef}
          type={inputType}
          onChange={handleChange}
          placeholder={insideLabel && label ? undefined : placeholder}
          value={value}
          name={name}
          $hasLabel={insideLabel}
          $isShowLabel={!!value}
          $size={size}
          $hasError={showAsError}
          $isHover={isHovered}
          {...props}
        />

        {showCloseIcon && hasValue && (
          <IconCancelContainer>
            <Icon iconName={IconName.X} onClick={handleResetValue} />
          </IconCancelContainer>
        )}

        {renderRightContent && (
          <RightContentContainer $hasValue={hasValue}>
            <LineBox />
            {renderRightContent}
          </RightContentContainer>
        )}
      </InputContainer>
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
