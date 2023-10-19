import { vars } from '@/features/theme';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '100%',
  height: 'calc(100% + 32px)',
  marginTop: '-32px',
});

export const contentContainer = style({
  position: 'absolute',
  inset: '0',

  width: '100%',
  height: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  padding: '96px 72px',
});

export const infoContainer = style({
  flex: 1,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '20px',

  color: vars.color.surfacePrimary.fillPrimary,
});

export const iconWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '16px',
  fontSize: '36px',
  borderRadius: vars.radius.small,

  background: vars.color.surfaceSecondary.background,
  color: vars.color.surfaceSecondary.attention,
});
