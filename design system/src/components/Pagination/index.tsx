import React, { useState } from 'react';
import { Button } from '../Button';
import PrevIcon from './assets/BackIcon';
import FirstPageIcon from './assets/FirstPageIcon';
import LastPageIcon from './assets/LastPageIcon';
import NextIcon from './assets/NextIcon';
import PageItem from './components/PageItem';
import { PaginationContainer, Paragraph, Separator } from './styles';
import { PaginationSizes, PaginationType } from './types';
import { createPageRange } from './utils/paginationRange';

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  totalPages: number;
  showEdgePages?: boolean;
  size?: PaginationSizes;
  type: PaginationType;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
  size = 'md',
  type = 'list',
  showEdgePages = true,
}) => {
  const [selectValue, setSelectValue] = useState(currentPage);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const paginationRange = createPageRange(
    showEdgePages,
    currentPage,
    totalPages
  );

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isSelectActive = currentPage === selectValue;

  const betweenPagesRange = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const allHiddenPages = (index: number) => {
    const prev = paginationRange[index - 1];
    const next = paginationRange[index + 1];

    if (typeof prev !== 'number' || typeof next !== 'number') return;

    if (index < paginationRange.length / 2) {
      return betweenPagesRange(prev + 1, next - 1);
    }

    return betweenPagesRange(prev + 1, next - 1);
  };

  return (
    <>
      {type === 'list' ? (
        <PaginationContainer $type={type}>
          {currentPage > 1 && (
            <>
              {!showEdgePages && (
                <PageItem
                  size={size}
                  icon={<FirstPageIcon />}
                  active={false}
                  onClick={() => setCurrentPage(1)}
                />
              )}

              <PageItem
                size={size}
                icon={<PrevIcon />}
                active={false}
                onClick={() => handlePageClick(currentPage - 1)}
              />
            </>
          )}

          {paginationRange.map((item, index) =>
            item === 'dot' ? (
              <PageItem
                key={index}
                size={size}
                pages={allHiddenPages(index)}
                active={false}
                isDot={true}
                onClick={() => {}}
              />
            ) : (
              <PageItem
                key={index}
                size={size}
                pageNumber={item}
                active={item === currentPage}
                onClick={() => handlePageClick(item)}
              />
            )
          )}

          {currentPage < totalPages && (
            <>
              <PageItem
                size={size}
                icon={<NextIcon />}
                active={false}
                onClick={() => handlePageClick(currentPage + 1)}
              />
              {!showEdgePages && (
                <PageItem
                  size={size}
                  icon={<LastPageIcon />}
                  active={false}
                  onClick={() => setCurrentPage(totalPages)}
                />
              )}
            </>
          )}
        </PaginationContainer>
      ) : (
        <PaginationContainer $type={type}>
          <Paragraph $size={size}>
            {isSelectActive ? 'Show' : 'Go to'}
          </Paragraph>

          {/* TODO: import select component after it is created*/}
          <select
            value={selectValue}
            onChange={e => setSelectValue(Number(e.target.value))}
          >
            {pages.map(item => (
              <option key={item + 'selectOption'} value={item}>
                {item}
              </option>
            ))}
          </select>

          {isSelectActive ? (
            <Paragraph $size={size}>
              <Separator>/</Separator>
              {totalPages}
            </Paragraph>
          ) : (
            <Button
              label={'Go'}
              variant="ghost"
              onClick={() => setCurrentPage(selectValue)}
            />
          )}
        </PaginationContainer>
      )}
    </>
  );
};
