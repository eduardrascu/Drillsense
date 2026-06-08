import { Group } from '@visx/group';
import { Text } from '@visx/text';
import { useTheme } from 'styled-components';

import { CoreChartPlaceholderProps } from './CoreChartBase.types';

export const CoreChartPlaceholder = ({
  calculatedMargins,
  gridProps,
}: CoreChartPlaceholderProps) => {
  const theme = useTheme();

  return (
    <Group>
      <rect
        fill={theme['neutralBorder']}
        opacity={0.45}
        height={40}
        rx={4}
        style={{ backdropFilter: 'blur(20px)' }}
        width={gridProps.width - 40}
        x={calculatedMargins.left + 20}
        y={calculatedMargins.top + gridProps.height / 2 - 20}
      />
      <Text
        fill={theme['neutralTextWeak']}
        fontSize="16"
        textAnchor="middle"
        verticalAnchor="middle"
        x={calculatedMargins.left + gridProps.width / 2}
        y={calculatedMargins.top + gridProps.height / 2}
      >
        Select chart type from the settings
      </Text>
    </Group>
  );
};
