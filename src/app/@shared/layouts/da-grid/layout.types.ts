export type DaJustify = 'start' | 'end' | 'center' | 'around' | 'between';
export type DaAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type DaAlignSelf = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type DaBreakpoint = 'ms' | 'mm' | 'ml' | 'xs' | 'sm' | 'md' | 'lg'| 'xl';
export const DaBreakpoints = ['ss', 'ms', 'mm', 'ml', 'xs', 'sm', 'md', 'lg', 'xl'];
export const DaBreakpointsMap = {
  'ss': 0,
  'ms': 360,
  'mm': 768,
  'ml': 1024,
  'xs': 1280,
  'sm': 1440,
  'md': 1600,
  'lg': 1760,
  'xl': 1920
};
