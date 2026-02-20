import type { Meta, StoryObj } from '@storybook/react';
import { theme } from '../../../themes';
import { Grid } from '../../molecules';
import { Text } from './Text';
import { TextProps } from './Text.types';

const meta: Meta<typeof Text> = {
  title: 'Components/Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    color: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold', 'heavy']
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
type Story = StoryObj<TextProps>;

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

const shortText = 'The quick brown fox jumps over the lazy dog.';

const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

export const Playground: Story = {
  args: { as: 'p', children: longText }
};

export const Semantic: Story = {
  render: () => {
    const tags = [
      { tag: 'b', description: 'Bold' },
      { tag: 'i', description: 'Italic' },
      { tag: 'p', description: 'Paragraph' },
      { tag: 's', description: 'Strikethrough' },
      { tag: 'small', description: 'Small' },
      { tag: 'span', description: 'Span' },
      { tag: 'strong', description: 'Strong' },
      { tag: 'u', description: 'Underline' }
    ] as const;
    return (
      <StoryContainer>
        {tags.map((item) => (
          <Grid gap={1} key={item.tag}>
            <StoryCaption>{item.description}</StoryCaption>
            <Text as={item.tag}>{shortText}</Text>
          </Grid>
        ))}
      </StoryContainer>
    );
  }
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
            <Text color={`${color}[600]`}>{shortText}</Text>
          </Grid>
        ))}
      </StoryContainer>
    );
  }
};

export const Sizes: Story = {
  render: () => {
    const sizes: NonNullable<TextProps['size']>[] = ['xs', 'sm', 'md', 'lg', 'xl'];
    return (
      <StoryContainer>
        {sizes.map((size) => (
          <Grid gap={1} key={size}>
            <StoryCaption>{size}</StoryCaption>
            <Text size={size}>{shortText}</Text>
          </Grid>
        ))}
      </StoryContainer>
    );
  }
};

export const Weight: Story = {
  render: () => {
    const weights: NonNullable<TextProps['weight']>[] = [
      'light',
      'regular',
      'medium',
      'bold',
      'heavy'
    ];
    return (
      <StoryContainer>
        {weights.map((weight) => (
          <Grid gap={1} key={weight}>
            <StoryCaption>{weight}</StoryCaption>
            <Text weight={weight}>{shortText}</Text>
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
            <Text letterSpacing={spacing}>{shortText}</Text>
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
            <Text textTransform={transform}>{shortText}</Text>
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
            <Text textAlign={align}>{shortText}</Text>
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
        <Text lineClamp={2}>{longText}</Text>
      </StoryContainer>
    );
  }
};
