import type { Meta, StoryObj } from '@storybook/react';
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

const StoryContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '12px 0 24px' }}>
    {children}
  </div>
);

const StoryCaption: React.FC<{ children: React.ReactNode; align?: TextProps['textAlign'] }> = ({
  children,
  align
}) => (
  <Text
    size="xs"
    weight="bold"
    color="gray[400]"
    letterSpacing="tight"
    textTransform="uppercase"
    textAlign={align}
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
          <div key={color}>
            <StoryCaption>{color}</StoryCaption>
            <Display as="h3" color={`${color}[600]`}>
              {shortText}
            </Display>
          </div>
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
          <div key={size}>
            <StoryCaption>{size}</StoryCaption>
            <Display as="h3" size={size}>
              {shortText}
            </Display>
          </div>
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
          <div key={spacing}>
            <StoryCaption>{spacing}</StoryCaption>
            <Display as="h3" letterSpacing={spacing}>
              {shortText}
            </Display>
          </div>
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
          <div key={transform}>
            <StoryCaption>{transform}</StoryCaption>
            <Display as="h3" textTransform={transform}>
              {shortText}
            </Display>
          </div>
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
          <div key={align}>
            <StoryCaption align={align}>{align}</StoryCaption>
            <Display as="h3" textAlign={align}>
              {shortText}
            </Display>
          </div>
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
