import type { Meta, StoryObj } from '@storybook/react';
import { theme } from '../../../themes';
import { Text } from '../Text/Text';
import { Column } from './Column';
import { ColumnProps } from './Column.types';

const meta: Meta<typeof Column> = {
  title: 'Components/Atoms/Column',
  component: Column,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    colSpan: {
      control: 'text'
    },
    rowSpan: {
      control: 'text'
    },
    colStart: {
      control: 'text'
    },
    rowStart: {
      control: 'text'
    },
    colEnd: {
      control: 'text'
    },
    rowEnd: {
      control: 'text'
    },
    alignSelf: {
      control: 'select',
      options: ['auto', 'start', 'end', 'center', 'stretch']
    },
    justifySelf: {
      control: 'select',
      options: ['auto', 'start', 'end', 'center', 'stretch']
    }
  }
};

export default meta;
type Story = StoryObj<ColumnProps>;

const StoryContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16,
      padding: '12px 0 24px'
    }}
  >
    {children}
  </div>
);

const StoryColumn = ({ style, children, ...columnProps }: ColumnProps) => {
  return (
    <Column style={{ padding: '1rem', ...style }} {...columnProps}>
      <Text size="sm" weight="bold" textAlign="center">
        {children}
      </Text>
    </Column>
  );
};

export const Playground: Story = { args: { children: 'Sample Column' } };

export const GridColumn: Story = {
  render: () => (
    <StoryContainer>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }} colSpan="span 2">
        1 [colSpan="span 2"]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[200] }} colSpan={3}>
        2 [colSpan=3]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[300] }} colSpan="span 3">
        3 [colSpan="span 3"]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[200] }} colSpan={1}>
        4 [colSpan=1]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }} colSpan="2/4">
        5 [colSpan="2/4"]
      </StoryColumn>
    </StoryContainer>
  )
};

export const GridRow: Story = {
  render: () => (
    <StoryContainer>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }} rowSpan="span 2">
        1 [rowSpan="span 2"]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[200] }} rowSpan={3}>
        2 [rowSpan=3]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[300] }} rowSpan="1/4">
        3 [rowSpan="1/4"]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[200] }} rowSpan="span 1">
        4[rowSpan="span 1"]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }} rowSpan="2/4">
        5 [rowSpan="2/4"]
      </StoryColumn>
    </StoryContainer>
  )
};

export const GridColumnStart: Story = {
  render: () => (
    <StoryContainer>
      <StoryColumn style={{ backgroundColor: theme.color.gray[300] }} colStart={2}>
        1 [colStart=2]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }}>2</StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }}>3</StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }}>4</StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }}>5</StoryColumn>
    </StoryContainer>
  )
};

export const GridRowStart: Story = {
  render: () => (
    <StoryContainer>
      <StoryColumn style={{ backgroundColor: theme.color.gray[300] }} rowStart={2}>
        1 [rowStart=2]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }}>2</StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }}>3</StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }}>4</StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }}>5</StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }}>6</StoryColumn>
    </StoryContainer>
  )
};

export const AlignSelf: Story = {
  render: () => (
    <StoryContainer>
      <StoryColumn style={{ backgroundColor: theme.color.gray[300] }} alignSelf="end">
        [alignSelf=end]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100], height: '3rem' }}>
        Default
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[300] }} alignSelf="start">
        [alignSelf=start]
      </StoryColumn>
    </StoryContainer>
  )
};

export const JustifySelf: Story = {
  render: () => (
    <StoryContainer>
      <StoryColumn style={{ backgroundColor: theme.color.gray[300] }} justifySelf="end">
        [justifySelf=end]
      </StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[100] }}>Default</StoryColumn>
      <StoryColumn style={{ backgroundColor: theme.color.gray[300] }} justifySelf="start">
        [justifySelf=start]
      </StoryColumn>
    </StoryContainer>
  )
};
