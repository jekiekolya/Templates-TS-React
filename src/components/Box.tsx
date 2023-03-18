import styled from '@emotion/styled';
import {
  color,
  space,
  layout,
  flexbox,
  background,
  border,
  position,
  grid,
  LayoutProps,
} from 'styled-system';

interface BoxProps extends LayoutProps {
  // Add any additional props needed by your component
}

export const Box = styled('div')<BoxProps>(
  color,
  space,
  layout,
  flexbox,
  background,
  border,
  position,
  grid
);
