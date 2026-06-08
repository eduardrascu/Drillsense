import React, {
  ChangeEvent,
  DragEvent,
  FC,
  MouseEventHandler,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';
import { Button } from '../Button';
import { Loader } from '../Loader';
import { FileProgressBar } from './FileProgressBar';
import { InfoText } from '../Input/styles';

import {
  ButtonTextContainer,
  PicturePreview,
  PictureText,
  PictureUploadButton,
  PictureUploadWrapper,
  ProgressContainer,
  ProgressLoaderBox,
  UploadArea,
  UploadContainer,
  UploadContent,
  UploadIcon,
  UploadText,
  UploadWrapper,
} from './styles';
import type { TSize } from '../../types/common.types';
import defaultPicture from './defaultPicture.png';

export type FileUploadVariant = 'regular' | 'compact';

export interface UploadingFile {
  file: File;
  progress: number;
}

export interface FileUploadProps {
  onChange: (files: File[]) => void;
  uploadFile?: (file: File, updateProgress: (progress: number) => void) => void;
  onCancel?: (file: File) => void;
  title?: string;
  description?: string;
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
  size?: TSize;
  initialFiles?: File[];
  isAvatar?: boolean;
  variant?: FileUploadVariant;
  showFileList?: boolean;
  showUploadIcon?: boolean;
  infoText?: string;
  errorText?: string;
  isError?: boolean;
  value?: string;
}

export const FileUpload: FC<FileUploadProps> = ({
  onChange,
  uploadFile,
  onCancel,
  title,
  description,
  accept,
  maxSize,
  size = 'md',
  multiple = false,
  initialFiles = [],
  isAvatar = false,
  variant = 'regular',
  showFileList = false,
  showUploadIcon = true,
  infoText,
  errorText,
  isError = false,
  value,
}) => {
  const defaultAccept = isAvatar
    ? '.jpg,.jpeg,.gif,.png'
    : '.csv,application/csv,text/csv,application/pdf,.pdf';

  const [isDragging, setIsDragging] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>(
    initialFiles.map(file => ({ file, progress: 0 }))
  );
  const [previewUrl, setPreviewUrl] = useState<string>(defaultPicture);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const highestProgressRef = useRef<{ [key: string]: number }>({});

  const handleDrag = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const acceptedFileTypesText = useMemo((): string => {
    const types = (accept || defaultAccept)
      ?.split(',')
      .filter(type => type.startsWith('.'))
      .map(type => type.toUpperCase().slice(1));

    if (!types?.length) return '';
    if (types.length === 1) return types[0];
    if (types.length === 2) return types.join(' or ');

    return `${types.slice(0, -1).join(', ')} or ${types.slice(-1)}`;
  }, [accept, defaultAccept]);

  const updateFileProgress = useCallback(
    (fileName: string, progress: number) => {
      setUploadingFiles(prevFiles =>
        prevFiles.map(file =>
          file.file.name === fileName ? { ...file, progress } : file
        )
      );
    },
    [setUploadingFiles]
  );

  const handleCancel = useCallback(
    (fileToRemove: File) => {
      setUploadingFiles(prevFiles =>
        prevFiles.filter(file => file.file !== fileToRemove)
      );
      if (onCancel) {
        onCancel(fileToRemove);
      }
    },
    [onCancel]
  );

  const validateFile = useCallback(
    async (file: File): Promise<boolean> => {
      if (maxSize) return file.size <= maxSize;

      return true;
    },
    [maxSize]
  );

  const handleFileSelect = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (!files) return;

      const validFiles: File[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (await validateFile(file)) {
          validFiles.push(file);

          if (isAvatar) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
          }

          if (uploadFile) {
            uploadFile(file, (progress: number) => {
              updateFileProgress(file.name, progress); // Обновляем прогресс файла
            });
          }
        }
      }

      if (validFiles.length > 0) {
        highestProgressRef.current = {};

        const newFiles = multiple
          ? [
              ...uploadingFiles,
              ...validFiles.map(file => ({ file, progress: 0 })),
            ]
          : [{ file: validFiles[0], progress: 0 }];
        setUploadingFiles(newFiles);

        onChange(validFiles);
      }
    },
    [
      validateFile,
      isAvatar,
      uploadFile,
      updateFileProgress,
      multiple,
      uploadingFiles,
      onChange,
    ]
  );

  const handleBrowseClick: MouseEventHandler = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleDrop = useCallback(
    async (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      const fileList: File[] = [];
      for (let i = 0; i < files.length; i++) {
        fileList.push(files[i]);
      }

      await handleFileSelect({ target: { files: fileList } } as any);
    },
    [handleFileSelect]
  );

  const formatSize = useCallback((bytes: number) => {
    const mb = bytes / 1024 / 1024;
    if (Number.isInteger(mb)) {
      return `${mb} MB`;
    }

    if (Math.abs(mb - Math.round(mb)) < 0.01) {
      return `${mb.toFixed(2)} MB`;
    }

    return `${mb.toFixed(1)} MB`;
  }, []);

  const maxSizeText = useMemo(() => {
    return maxSize ? `(max. ${formatSize(maxSize)})` : '';
  }, [maxSize, formatSize]);

  const renderUploadContent = useMemo(() => {
    if (!multiple && showFileList && uploadingFiles.length > 0) {
      return (
        <>
          {showUploadIcon && (
            <ProgressLoaderBox>
              <Loader
                size="xl"
                progress={uploadingFiles?.[0]?.progress}
                isFinish={Number(uploadingFiles?.[0]?.progress) === 100}
              />
            </ProgressLoaderBox>
          )}
          <UploadContent>
            <UploadText
              $textAlign={
                !showUploadIcon && variant === 'compact' ? 'start' : 'center'
              }
            >
              {Number(uploadingFiles?.[0]?.progress) === 100
                ? 'Files uploaded'
                : 'Files uploading...'}
              <span>{uploadingFiles?.[0]?.progress}%</span>
            </UploadText>
          </UploadContent>
          <Button
            type="button"
            variant="secondary"
            label="Cancel"
            onClick={e => {
              e.stopPropagation();
              onCancel?.(uploadingFiles?.[0]?.file);
            }}
          />
        </>
      );
    }
    return (
      <>
        {showUploadIcon && (
          <UploadIcon>
            <Icon iconName={IconName.UPLOAD} />
          </UploadIcon>
        )}
        <UploadContent>
          <UploadText
            $textAlign={
              !showUploadIcon && variant === 'compact' ? 'start' : 'center'
            }
          >
            {title || 'Click or drag file to this area to upload'}
            <span>
              {description || `${acceptedFileTypesText} ${maxSizeText}`}
            </span>
          </UploadText>
        </UploadContent>
        <Button type="button" variant="secondary" label="Browse files" />
      </>
    );
  }, [
    multiple,
    showFileList,
    uploadingFiles,
    showUploadIcon,
    variant,
    title,
    description,
    acceptedFileTypesText,
    maxSizeText,
    onCancel,
  ]);

  if (isAvatar) {
    return (
      <PictureUploadWrapper>
        <PicturePreview>
          <img src={value || previewUrl || defaultPicture} alt="Preview" />
        </PicturePreview>
        <ButtonTextContainer>
          <PictureUploadButton
            $size={size}
            onClick={handleBrowseClick}
            type="button"
          >
            {title || 'Upload photo'}
          </PictureUploadButton>
          <PictureText>{acceptedFileTypesText}.</PictureText>
          <PictureText $noMargin>{description || maxSizeText}</PictureText>
        </ButtonTextContainer>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          accept={accept || defaultAccept}
          style={{ display: 'none' }}
        />
      </PictureUploadWrapper>
    );
  }

  return (
    <UploadWrapper>
      <UploadContainer onClick={handleBrowseClick}>
        <UploadArea
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          $isDragging={isDragging}
          $size={size}
          $variant={variant}
        >
          {renderUploadContent}
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            accept={accept || defaultAccept}
            multiple={multiple}
            style={{ display: 'none' }}
          />
        </UploadArea>
      </UploadContainer>

      {(infoText || errorText) && (
        <InfoText $hasError={!!errorText && isError} style={{ marginTop: 4 }}>
          {!!errorText && isError ? (
            <Icon iconName={IconName.DANGER_INFO} />
          ) : infoText ? (
            <Icon iconName={IconName.SYSTEM_INFO} />
          ) : null}{' '}
          {(errorText && isError && errorText) || infoText}
        </InfoText>
      )}

      {showFileList && multiple && (
        <ProgressContainer>
          {uploadingFiles?.map(({ file, progress }, index) => (
            <FileProgressBar
              key={index}
              progress={progress}
              file={file}
              onCancel={() => handleCancel?.(file)}
              isError={!!errorText && isError}
            />
          ))}
        </ProgressContainer>
      )}
    </UploadWrapper>
  );
};
