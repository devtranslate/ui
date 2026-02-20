import type { Meta, StoryObj } from '@storybook/react';
import { theme } from '../../../themes';
import { Column, Text, TextProps } from '../../atoms';

import { Grid } from './Grid';
import { GridProps } from './Grid.types';

const meta: Meta<typeof Grid> = {
  title: 'Components/Molecules/Grid',
  component: Grid,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    gap: {
      control: 'select',
      options: Array.from({ length: 24 }, (_, i) => i)
    },
    rowGap: {
      control: 'select',
      options: Array.from({ length: 24 }, (_, i) => i)
    },
    columnGap: {
      control: 'select',
      options: Array.from({ length: 24 }, (_, i) => i)
    },
    alignItems: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch']
    },
    justifyItems: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch']
    },
    alignContent: {
      control: 'select',
      options: [
        'start',
        'end',
        'center',
        'stretch',
        'space-between',
        'space-around',
        'space-evenly'
      ]
    },
    justifyContent: {
      control: 'select',
      options: [
        'start',
        'end',
        'center',
        'stretch',
        'space-between',
        'space-around',
        'space-evenly'
      ]
    }
  }
};

export default meta;
type Story = StoryObj<GridProps>;

const GridItem = ({ children, height }: { children: React.ReactNode; height?: string }) => (
  <Column
    style={{
      backgroundColor: theme.color.gray[200],
      padding: '1rem',
      height: height || 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text size="sm" weight="bold" textAlign="center">
      {children}
    </Text>
  </Column>
);

const GridItems = ({ count }: { count: number }) => {
  return Array.from({ length: count }, (_, index) => (
    <GridItem key={`item-${index}`}>Item {index + 1}</GridItem>
  ));
};

const StoryContainer = ({ gap = 4, ...props }: GridProps) => (
  <Grid gap={gap} {...props} style={{ padding: `${theme.spacing[3]} 0 ${theme.spacing[6]}` }}>
    {props.children}
  </Grid>
);

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

export const Playground: Story = {
  args: {
    as: 'div',
    gap: 4,
    templateColumns: 'repeat(6, 1fr)',
    children: <GridItems count={12} />
  }
};

export const TemplateColumns: Story = {
  render: () => (
    <StoryContainer templateColumns="1fr 2fr 1fr">
      <GridItems count={6} />
    </StoryContainer>
  )
};

export const TemplateRows: Story = {
  render: () => (
    <StoryContainer templateColumns="repeat(3, 1fr)" templateRows="1fr 2fr">
      <GridItems count={6} />
    </StoryContainer>
  )
};

export const Gap: Story = {
  render: () => (
    <StoryContainer gap={8}>
      <Grid gap={2}>
        <StoryCaption>Gap (Rows = Columns)</StoryCaption>
        <Grid gap={4} templateColumns="repeat(3, 1fr)">
          <GridItems count={6} />
        </Grid>
      </Grid>
      <Grid gap={2}>
        <StoryCaption>Custom Gap (Rows ≠ Columns)</StoryCaption>
        <Grid columnGap={2} rowGap={1} templateColumns="repeat(3, 1fr)">
          <GridItems count={6} />
        </Grid>
      </Grid>
    </StoryContainer>
  )
};

export const AlignItems: Story = {
  render: () => (
    <StoryContainer templateColumns="repeat(4, 1fr)">
      {(['start', 'end', 'center', 'stretch'] as const).map((align) => (
        <Grid gap={2} key={align}>
          <StoryCaption>{align}</StoryCaption>
          <Grid
            gap={2}
            templateColumns="repeat(2, 1fr)"
            templateRows="10rem"
            alignItems={align}
            style={{
              border: `${theme.border.width.thin} ${theme.border.style.dashed} ${theme.color.gray[200]}`,
              padding: theme.spacing[2]
            }}
          >
            <GridItem height="4rem">A</GridItem>
            <GridItem height="6rem">B</GridItem>
          </Grid>
        </Grid>
      ))}
    </StoryContainer>
  )
};

export const JustifyItems: Story = {
  render: () => (
    <StoryContainer templateColumns="repeat(4, 1fr)">
      {(['start', 'end', 'center', 'stretch'] as const).map((justify) => (
        <Grid gap={2} key={justify}>
          <StoryCaption>{justify}</StoryCaption>
          <Grid
            gap={3}
            templateColumns="repeat(2, auto)"
            justifyItems={justify}
            style={{
              border: `${theme.border.width.thin} ${theme.border.style.dashed} ${theme.color.gray[200]}`,
              padding: theme.spacing[2]
            }}
          >
            <GridItem>A</GridItem>
            <GridItem>B</GridItem>
          </Grid>
        </Grid>
      ))}
    </StoryContainer>
  )
};

export const AlignContent: Story = {
  render: () => (
    <StoryContainer templateColumns="repeat(4, 1fr)">
      {(['start', 'end', 'center', 'space-between'] as const).map((align) => (
        <Grid gap={2} key={align}>
          <StoryCaption>{align}</StoryCaption>
          <Grid
            gap={2}
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 4rem)"
            alignContent={align}
            style={{
              border: `${theme.border.width.thin} ${theme.border.style.dashed} ${theme.color.gray[200]}`,
              padding: theme.spacing[2],
              height: '12rem'
            }}
          >
            <GridItem>A</GridItem>
            <GridItem>B</GridItem>
            <GridItem>C</GridItem>
            <GridItem>D</GridItem>
          </Grid>
        </Grid>
      ))}
    </StoryContainer>
  )
};

export const JustifyContent: Story = {
  render: () => (
    <StoryContainer templateColumns="repeat(4, 1fr)">
      {(['start', 'end', 'center', 'space-between'] as const).map((justify) => (
        <Grid gap={2} key={justify}>
          <StoryCaption>{justify}</StoryCaption>
          <Grid
            gap={2}
            templateColumns="repeat(2, auto)"
            justifyContent={justify}
            style={{
              border: `${theme.border.width.thin} ${theme.border.style.dashed} ${theme.color.gray[200]}`,
              padding: theme.spacing[2]
            }}
          >
            <GridItem>A</GridItem>
            <GridItem>B</GridItem>
          </Grid>
        </Grid>
      ))}
    </StoryContainer>
  )
};
