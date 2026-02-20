import type { Meta, StoryObj } from '@storybook/react';
import { theme } from '../../../themes';
import { Grid } from '../../molecules';
import { Text } from '../Text/Text';
import { TextProps } from '../Text/Text.types';
import { Display } from './Display';
import { DisplayProps } from './Display.types';

const meta: Meta<typeof Display> = {
  title: 'Components/Atoms/Display',
  component: Display,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    color: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    letterSpacing: {
      control: 'select',
      options: ['none', 'tight', 'snug', 'relaxed', 'loose']
    },
    textTransform: {
      control: 'text'
    },
    textAlign: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<DisplayProps>;

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <Grid gap={4} style={{ padding: `${theme.spacing[3]} 0 ${theme.spacing[6]}` }}>
    {children}
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

const shortText = 'Display Heading';

const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const Playground: Story = {
  args: { as: 'h3', size: 'md', children: shortText }
};

export const Colors: Story = {
  render: () => {
    const colors: TextProps['color'][] = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'purple',
      'pink'
    ];
    return (
      <StoryContainer>
        {colors.map((color) => (
          <Grid gap={1} key={color}>
            <StoryCaption>{color}</StoryCaption>
            <Display as="h3" color={`${color}[600]`}>
              {shortText}
            </Display>
          </Grid>
        ))}
      </StoryContainer>
    );
  }
};

export const Sizes: Story = {
  render: () => {
    const sizes: NonNullable<DisplayProps['size']>[] = ['sm', 'md', 'lg'];
    return (
      <StoryContainer>
        {sizes.map((size) => (
          <Grid gap={1} key={size}>
            <StoryCaption>{size}</StoryCaption>
            <Display as="h3" size={size}>
              {shortText}
            </Display>
          </Grid>
        ))}
      </StoryContainer>
    );
  }
};

export const LetterSpacing: Story = {
  render: () => {
    const letterSpacings: NonNullable<TextProps['letterSpacing']>[] = [
      'none',
      'tight',
      'snug',
      'relaxed',
      'loose'
    ];
    return (
      <StoryContainer>
        {letterSpacings.map((spacing) => (
          <Grid gap={1} key={spacing}>
            <StoryCaption>{spacing}</StoryCaption>
            <Display as="h3" letterSpacing={spacing}>
              {shortText}
            </Display>
          </Grid>
        ))}
      </StoryContainer>
    );
  }
};

export const TextTransform: Story = {
  render: () => {
    const textTransform: TextProps['textTransform'][] = [
      'none',
      'capitalize',
      'uppercase',
      'lowercase'
    ];
    return (
      <StoryContainer>
        {textTransform.map((transform) => (
          <Grid gap={1} key={transform}>
            <StoryCaption>{transform}</StoryCaption>
            <Display as="h3" textTransform={transform}>
              {shortText}
            </Display>
          </Grid>
        ))}
      </StoryContainer>
    );
  }
};

export const TextAlign: Story = {
  render: () => {
    const textAlign: TextProps['textAlign'][] = ['left', 'center', 'right'];
    return (
      <StoryContainer>
        {textAlign.map((align) => (
          <Grid gap={1} key={align}>
            <StoryCaption align={align}>{align}</StoryCaption>
            <Display as="h3" textAlign={align}>
              {shortText}
            </Display>
          </Grid>
        ))}
      </StoryContainer>
    );
  }
};

export const LineClamp: Story = {
  render: () => {
    return (
      <StoryContainer>
        <Display as="h3" lineClamp={2}>
          {longText}
        </Display>
      </StoryContainer>
    );
  }
};
