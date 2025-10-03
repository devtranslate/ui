type BreakpointSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointMap = Partial<Record<BreakpointSizes, string>>;

type BreakpointRange = { min: string; max: string };

export type Breakpoint = {
  xs: BreakpointRange;
  sm: BreakpointRange;
  md: BreakpointRange;
  lg: BreakpointRange;
  xl: Omit<BreakpointRange, 'max'>;
};
