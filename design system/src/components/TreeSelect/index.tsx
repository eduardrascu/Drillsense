import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Select, {
  ActionMeta,
  components,
  Props as ReactSelectProps,
} from 'react-select';
import { useTheme } from 'styled-components';
import type { TSize } from '../../types/common.types';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';
import { InfoText, InputLabel } from '../Input/styles';
import {
  CheckboxContainer,
  customStyles,
  Divider,
  SelectAllContainer,
  SelectContainer,
  SelectWrapper,
  Text,
  TreeOption,
  TreeOptionContent,
  TreeOptionIcon,
  TreeOptionLabel,
  TreeOptionLabelContent,
} from './styles';

export interface TreeSelectNode {
  label: ReactNode;
  value: string;
  children?: TreeSelectNode[];
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  isDisabled?: boolean;
}

interface FlattenedTreeSelectNode extends TreeSelectNode {
  level: number;
  hasChildren: boolean;
}

export interface TreeSelectProps
  extends Omit<
    ReactSelectProps<TreeSelectNode, boolean>,
    'value' | 'onChange' | 'options'
  > {
  options: TreeSelectNode[];
  value: string | string[] | null;
  onChange: (value: string | string[] | null) => void;
  placeholder?: string;
  hasError?: boolean;
  size?: TSize;
  infoText?: string;
  errorText?: string;
  multiSelect?: boolean;
  asLabelAttachment?: boolean;
  selectAllLabel?: string;
  required?: boolean;
  label?: string;
  insideLabel?: boolean;
  isDisabled?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  includeChildrenOnly?: boolean;
}

const SELECT_ALL_VALUE = '__select_all__';

const flattenTree = (
  nodes: TreeSelectNode[],
  level = 0,
  expandedNodes: Set<string> = new Set()
): FlattenedTreeSelectNode[] => {
  const flattened: FlattenedTreeSelectNode[] = [];
  nodes.forEach(node => {
    const flattenedNode: FlattenedTreeSelectNode = {
      ...node,
      level,
      hasChildren: !!node.children && node.children.length > 0,
    };
    flattened.push(flattenedNode);
    if (
      node.children &&
      node.children.length > 0 &&
      expandedNodes.has(node.value)
    ) {
      flattened.push(...flattenTree(node.children, level + 1, expandedNodes));
    }
  });
  return flattened;
};

const getAllValues = (nodes: TreeSelectNode[]): string[] => {
  const values: string[] = [];
  const collect = (n: TreeSelectNode[]) =>
    n.forEach(node => {
      values.push(node.value);
      if (node.children && node.children.length > 0) collect(node.children);
    });
  collect(nodes);
  return values;
};

const getChildrenValues = (node: TreeSelectNode): string[] => {
  const values: string[] = [];
  const collect = (n: TreeSelectNode[]) =>
    n.forEach(child => {
      values.push(child.value);
      if (child.children && child.children.length > 0) collect(child.children);
    });
  if (node.children && node.children.length > 0) collect(node.children);
  return values;
};

const getLeafChildrenValues = (node: TreeSelectNode): string[] => {
  const leaves: string[] = [];
  const collectLeaves = (children: TreeSelectNode[]) => {
    children.forEach(child => {
      if (child.children && child.children.length > 0) {
        collectLeaves(child.children);
      } else {
        leaves.push(child.value);
      }
    });
  };

  if (node.children && node.children.length > 0) collectLeaves(node.children);
  return leaves;
};

const flattenTreeAll = (
  nodes: TreeSelectNode[],
  level = 0
): FlattenedTreeSelectNode[] => {
  const flattened: FlattenedTreeSelectNode[] = [];
  nodes.forEach(node => {
    const flattenedNode: FlattenedTreeSelectNode = {
      ...node,
      level,
      hasChildren: !!node.children && node.children.length > 0,
    };
    flattened.push(flattenedNode);
    if (node.children && node.children.length > 0) {
      flattened.push(...flattenTreeAll(node.children, level + 1));
    }
  });
  return flattened;
};

export const TreeSelect: FC<TreeSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select',
  hasError,
  size = 'md',
  infoText,
  errorText,
  multiSelect = false,
  asLabelAttachment = false,
  selectAllLabel = 'Select all',
  required = false,
  label,
  insideLabel = false,
  isDisabled = false,
  onBlur,
  includeChildrenOnly = false,
  ...props
}) => {
  const theme = useTheme();
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const showAsError = useMemo(
    () => hasError || !!errorText,
    [hasError, errorText]
  );

  useEffect(() => {
    if (menuIsOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [menuIsOpen]);

  const handleToggleExpand = useCallback((nodeValue: string) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      newSet.has(nodeValue) ? newSet.delete(nodeValue) : newSet.add(nodeValue);
      return newSet;
    });
  }, []);

  const flattenedOptions = useMemo(() => {
    const flat = flattenTree(options, 0, expandedNodes);
    return multiSelect
      ? [
          {
            label: selectAllLabel,
            value: SELECT_ALL_VALUE,
            level: 0,
            hasChildren: false,
          },
          ...flat,
        ]
      : flat;
  }, [options, multiSelect, selectAllLabel, expandedNodes]);

  const Option = useCallback(
    (optionProps: any) => {
      const { data, isFocused, isSelected } = optionProps;
      const node = data as FlattenedTreeSelectNode;
      const isExpanded = expandedNodes.has(node.value);
      const handleExpandClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (node.hasChildren) handleToggleExpand(node.value);
      };
      return (
        <components.Option {...optionProps}>
          <TreeOption
            $level={node.level}
            $isSelected={isSelected}
            $isFocused={isFocused}
          >
            <TreeOptionContent>
              {node.hasChildren && (
                <TreeOptionIcon
                  $isExpanded={isExpanded}
                  onClick={handleExpandClick}
                >
                  <Icon
                    iconName={
                      isExpanded ? IconName.CHEVRON_UP : IconName.CHEVRON_DOWN
                    }
                  />
                </TreeOptionIcon>
              )}
              <TreeOptionLabel>
                <TreeOptionLabelContent>
                  {node.leftContent}
                  {node.label}
                </TreeOptionLabelContent>
                {node.rightContent}
              </TreeOptionLabel>
            </TreeOptionContent>
          </TreeOption>
        </components.Option>
      );
    },
    [expandedNodes, handleToggleExpand]
  );

  const MultiSelectOption = useCallback(
    (optionProps: any) => {
      const { data, isFocused } = optionProps;
      const node = data as FlattenedTreeSelectNode;
      const isSelectAll = node.value === SELECT_ALL_VALUE;
      const isExpanded = expandedNodes.has(node.value);
      const selectedValues = Array.isArray(value)
        ? value
        : value === null
        ? []
        : [];
      const allValues = getAllValues(options);

      const isSelectAllSelected =
        isSelectAll && selectedValues.length === allValues.length;
      const childrenValues = node.hasChildren
        ? includeChildrenOnly
          ? getLeafChildrenValues(node)
          : getChildrenValues(node)
        : [];
      const allChildrenSelected =
        childrenValues.length > 0 &&
        childrenValues.every(val => selectedValues.includes(val));
      const someChildrenSelected =
        childrenValues.length > 0 &&
        childrenValues.some(val => selectedValues.includes(val));

      const isNodeSelected = isSelectAll
        ? false
        : node.hasChildren
        ? allChildrenSelected
        : selectedValues.includes(node.value);
      const isIndeterminate =
        !isSelectAll &&
        node.hasChildren &&
        !allChildrenSelected &&
        someChildrenSelected;

      const handleToggleSelection = (
        e: React.MouseEvent | React.ChangeEvent
      ) => {
        e.stopPropagation();
        e.preventDefault();

        if (isSelectAll) {
          if (selectedValues.length === allValues.length) {
            onChange([]);
          } else {
            onChange(allValues);
          }
        } else if (node.hasChildren) {
          if (includeChildrenOnly) {
            const childrenValues = getLeafChildrenValues(node);
            const allChildrenSelected =
              childrenValues.length > 0 &&
              childrenValues.every(val => selectedValues.includes(val));
            if (allChildrenSelected) {
              onChange(
                selectedValues.filter(val => !childrenValues.includes(val))
              );
            } else {
              onChange(
                Array.from(new Set([...selectedValues, ...childrenValues]))
              );
            }
          } else {
            const descendants = getAllValues([node]);
            const allSelected = descendants.every(val =>
              selectedValues.includes(val)
            );
            if (allSelected) {
              onChange(
                selectedValues.filter(val => !descendants.includes(val))
              );
            } else {
              onChange(
                Array.from(new Set([...selectedValues, ...descendants]))
              );
            }
          }
        } else {
          // Toggle just this node
          if (selectedValues.includes(node.value)) {
            let newSelected = selectedValues.filter(val => val !== node.value);
            const removeUnselectedParents = (currentNode: TreeSelectNode) => {
              const findParent = (
                nodes: TreeSelectNode[],
                childValue: string
              ): TreeSelectNode | null => {
                for (const n of nodes) {
                  if (
                    n.children &&
                    n.children.some(c => c.value === childValue)
                  )
                    return n;
                  if (n.children) {
                    const found = findParent(n.children, childValue);
                    if (found) return found;
                  }
                }
                return null;
              };
              const parent = findParent(options, currentNode.value);
              if (parent) {
                const siblingValues = parent.children
                  ? parent.children.map(c => c.value)
                  : [];
                const allSiblingsSelected = siblingValues.every(val =>
                  newSelected.includes(val)
                );
                if (!allSiblingsSelected) {
                  newSelected = newSelected.filter(val => val !== parent.value);
                  // Recursively check up the tree
                  removeUnselectedParents(parent);
                }
              }
            };
            removeUnselectedParents(node);
            onChange(newSelected);
          } else {
            onChange([...selectedValues, node.value]);
          }
        }
      };

      const handleExpandClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        if (node.hasChildren) handleToggleExpand(node.value);
      };

      return (
        <>
          <components.Option {...optionProps}>
            {isSelectAll ? (
              <TreeOption
                $level={0}
                $isSelected={isSelectAllSelected}
                $isFocused={isFocused}
                onClick={handleToggleSelection}
              >
                <TreeOptionContent>
                  <SelectAllContainer>
                    <CheckboxContainer>
                      <Checkbox
                        checked={isSelectAllSelected}
                        onChange={() => {}}
                        tabIndex={-1}
                      />
                    </CheckboxContainer>
                    <Text>{node.label}</Text>
                  </SelectAllContainer>
                </TreeOptionContent>
              </TreeOption>
            ) : (
              <TreeOption
                $level={node.level}
                $isSelected={isNodeSelected}
                $isFocused={isFocused}
                onClick={handleToggleSelection}
              >
                <TreeOptionContent>
                  {node.hasChildren && (
                    <TreeOptionIcon
                      $isExpanded={isExpanded}
                      onClick={handleExpandClick}
                    >
                      <Icon
                        iconName={
                          isExpanded
                            ? IconName.CHEVRON_UP
                            : IconName.CHEVRON_DOWN
                        }
                      />
                    </TreeOptionIcon>
                  )}
                  <TreeOptionLabel>
                    <TreeOptionLabelContent>
                      <CheckboxContainer>
                        <Checkbox
                          checked={isNodeSelected}
                          intermediate={isIndeterminate}
                          onChange={() => {}}
                          tabIndex={-1}
                        />
                      </CheckboxContainer>
                      {node.leftContent}
                      <Text>{node.label}</Text>
                    </TreeOptionLabelContent>
                    {node.rightContent}
                  </TreeOptionLabel>
                </TreeOptionContent>
              </TreeOption>
            )}
          </components.Option>
          {isSelectAll && <Divider />}
        </>
      );
    },
    [
      expandedNodes,
      handleToggleExpand,
      value,
      options,
      onChange,
      includeChildrenOnly,
    ]
  );

  const handleChange = useCallback(
    (newValue: any, actionMeta: ActionMeta<TreeSelectNode>) => {
      if (multiSelect) {
        if (actionMeta.action === 'clear') {
          onChange([]);
          return;
        }

        // Handle individual chip removal (when X button is clicked)
        if (actionMeta.action === 'remove-value') {
          const selectedOptions = newValue as FlattenedTreeSelectNode[] | null;
          if (selectedOptions) {
            const selectedValues = selectedOptions.map(opt => opt.value);
            // Filter out SELECT_ALL_VALUE if present
            let regularValues = selectedValues.filter(
              val => val !== SELECT_ALL_VALUE
            );

            // Handle parent node removal logic similar to handleToggleSelection
            const findParent = (
              nodes: TreeSelectNode[],
              childValue: string
            ): TreeSelectNode | null => {
              for (const n of nodes) {
                if (n.children && n.children.some(c => c.value === childValue))
                  return n;
                if (n.children) {
                  const found = findParent(n.children, childValue);
                  if (found) return found;
                }
              }
              return null;
            };

            const removeUnselectedParents = (removedValue: string) => {
              const parent = findParent(options, removedValue);
              if (parent) {
                const siblingValues = parent.children
                  ? parent.children.map(c => c.value)
                  : [];
                const allSiblingsSelected = siblingValues.every(val =>
                  regularValues.includes(val)
                );
                if (
                  !allSiblingsSelected &&
                  regularValues.includes(parent.value)
                ) {
                  regularValues = regularValues.filter(
                    val => val !== parent.value
                  );
                  // Recursively check up the tree
                  removeUnselectedParents(parent.value);
                }
              }
            };

            const removedValue = actionMeta.removedValue?.value;
            if (removedValue) {
              removeUnselectedParents(removedValue);
            }

            onChange(regularValues);
          } else {
            onChange([]);
          }
          return;
        }

        // For other actions in multiSelect, return early
        // The actual selection is handled by MultiSelectOption's handleToggleSelection
        return;
      }

      // This part handles single select
      const option = newValue as TreeSelectNode | null;
      if (option === null) {
        onChange(null); // Cleared
      } else {
        onChange(option.value);
      }
    },
    [multiSelect, onChange, options]
  );

  const getSelectedValue = () => {
    if (multiSelect) {
      const selectedValues = Array.isArray(value)
        ? value
        : value === null
        ? []
        : [];
      const allFlattened = flattenTreeAll(options);
      return allFlattened.filter(option =>
        selectedValues.includes(option.value)
      );
    } else {
      return flattenedOptions.find(option => option.value === value) || null;
    }
  };

  const ValueContainer = (props: any) => {
    const { children, hasValue, selectProps } = props;
    const { placeholder } = selectProps;
    if (asLabelAttachment && hasValue) {
      const childNodes = React.Children.toArray(children);
      const input = childNodes[childNodes.length - 1];
      return (
        <components.ValueContainer {...props}>
          <components.Placeholder {...props} isFocused={props.isFocused}>
            {placeholder}
          </components.Placeholder>
          {input}
        </components.ValueContainer>
      );
    }
    return (
      <components.ValueContainer {...props}>
        {children}
      </components.ValueContainer>
    );
  };

  return (
    <SelectWrapper>
      {!insideLabel && label && (
        <InputLabel $isRequired={required} $size={size}>
          {label}
        </InputLabel>
      )}
      <SelectContainer
        $hasError={showAsError}
        $asLabelAttachment={asLabelAttachment}
        $isDisabled={isDisabled}
      >
        <Select
          options={flattenedOptions}
          value={getSelectedValue()}
          onChange={handleChange}
          placeholder={insideLabel && !!label ? label : placeholder}
          isMulti={multiSelect}
          components={{
            DropdownIndicator: (props: any) => (
              <components.DropdownIndicator {...props}>
                <Icon
                  iconName={
                    props.selectProps.menuIsOpen
                      ? IconName.CHEVRON_UP
                      : IconName.CHEVRON_DOWN
                  }
                />
              </components.DropdownIndicator>
            ),
            ClearIndicator: (props: any) => (
              <components.ClearIndicator {...props}>
                <Icon iconName={IconName.X} />
              </components.ClearIndicator>
            ),
            Option: multiSelect ? MultiSelectOption : Option,
            IndicatorSeparator: null,
            ValueContainer,
          }}
          styles={customStyles(
            theme,
            size,
            showAsError,
            asLabelAttachment,
            insideLabel
          )}
          menuPortalTarget={document.body}
          isClearable={!asLabelAttachment}
          closeMenuOnSelect={!multiSelect}
          hideSelectedOptions={false}
          isSearchable={!asLabelAttachment}
          classNamePrefix="react-select"
          isDisabled={isDisabled}
          onBlur={onBlur}
          onMenuOpen={() => setMenuIsOpen(true)}
          onMenuClose={() => setMenuIsOpen(false)}
          {...props}
        />
      </SelectContainer>
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
    </SelectWrapper>
  );
};
