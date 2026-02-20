import type { Meta, StoryObj } from '@storybook/react';
import { theme } from '../../../themes';
import { Grid, GridProps } from '../../molecules';
import { Text } from '../Text/Text';
import { TextProps } from '../Text/Text.types';
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

const StoryContainer = (props: GridProps) => {
  const { children, templateColumns, ...style } = props;
  return (
    <Grid
      gap={4}
      templateColumns={templateColumns || 'repeat(3, 1fr)'}
      style={{
        padding: `${theme.spacing[3]} 0 ${theme.spacing[6]}`,
        ...style
      }}
    >
      {children}
    </Grid>
  );
};

const GridItem = ({ style, children, ...columnProps }: ColumnProps) => {
  return (
    <Column
      style={{ padding: theme.spacing[4], backgroundColor: theme.color.gray[200], ...style }}
      {...columnProps}
    >
      <Text size="sm" weight="bold" textAlign="center">
        {children}
      </Text>
    </Column>
  );
};

const StoryCaption = ({
  children,
  align
}: {
  children: React.ReactNode;
  align?: TextProps['textAlign'];
}) => (
  <Text
    weight="bold"
    color="gray[500]"
    letterSpacing="relaxed"
    textTransform="uppercase"
    textAlign={align}
    style={{ fontSize: 11 }}
  >
    {children}
  </Text>
);

export const Playground: Story = { args: { children: 'Sample Column' } };

export const ColSpan: Story = {
  render: () => (
    <StoryContainer>
      <GridItem colSpan="span 2">colSpan="span 2"</GridItem>
      <GridItem colSpan={3}>colSpan={3}</GridItem>
      <GridItem colSpan="span 3">colSpan="span 3"</GridItem>
      <GridItem colSpan={1}>colSpan={1}</GridItem>
      <GridItem colSpan="2/4">colSpan="2/4"</GridItem>
    </StoryContainer>
  )
};

export const RowSpan: Story = {
  render: () => (
    <StoryContainer>
      <GridItem rowSpan="span 2">rowSpan="span 2"</GridItem>
      <GridItem rowSpan={3}>rowSpan={3}</GridItem>
      <GridItem rowSpan="1/4">rowSpan="1/4"</GridItem>
      <GridItem rowSpan="span 1">rowSpan="span 1"</GridItem>
      <GridItem rowSpan="2/4">rowSpan="2/4"</GridItem>
    </StoryContainer>
  )
};

export const ColStart: Story = {
  render: () => (
    <StoryContainer>
      <GridItem colStart={2} style={{ backgroundColor: theme.color.red[200] }}>
        colStart={2}
      </GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
    </StoryContainer>
  )
};

export const RowStart: Story = {
  render: () => (
    <StoryContainer>
      <GridItem rowStart={2} style={{ backgroundColor: theme.color.red[200] }}>
        rowStart={2}
      </GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
      <GridItem>Item 6</GridItem>
    </StoryContainer>
  )
};

export const AlignSelf: Story = {
  render: () => (
    <StoryContainer gap={4} templateColumns="repeat(5, 1fr)">
      {(['auto', 'start', 'end', 'center', 'stretch'] as const).map((align) => (
        <Grid gap={2} key={align}>
          <StoryCaption align="center">{align}</StoryCaption>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              height: '10rem',
              border: `${theme.border.width.thin} ${theme.border.style.dashed} ${theme.color.gray[200]}`,
              padding: theme.spacing[2]
            }}
          >
            <GridItem alignSelf={align} style={{ height: '4rem' }}>
              A
            </GridItem>
          </div>
        </Grid>
      ))}
    </StoryContainer>
  )
};

export const JustifySelf: Story = {
  render: () => (
    <StoryContainer gap={4} templateColumns="repeat(5, 1fr)">
      {(['auto', 'start', 'end', 'center', 'stretch'] as const).map((justify) => (
        <Grid gap={2} key={justify}>
          <StoryCaption align="center">{justify}</StoryCaption>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              border: `${theme.border.width.thin} ${theme.border.style.dashed} ${theme.color.gray[200]}`,
              padding: theme.spacing[2]
            }}
          >
            <GridItem justifySelf={justify}>A</GridItem>
          </div>
        </Grid>
      ))}
    </StoryContainer>
  )
};
