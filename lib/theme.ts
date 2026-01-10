export enum Size {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

export enum Fill {
  Main = 'main',
  Secondary = 'secondary',
  Outline = 'outline',
  Ghost = 'ghost',
}

export const buttonSizes = {
  [Size.XS]: {
    paddingX: '0.5rem',
    paddingY: '0.25rem',
    height: '1.75rem',
    fontSize: '0.75rem',
  },
  [Size.SM]: {
    paddingX: '0.75rem',
    paddingY: '0.375rem',
    height: '2rem',
    fontSize: '0.875rem',
  },
  [Size.MD]: {
    paddingX: '1rem',
    paddingY: '0.5rem',
    height: '2.5rem',
    fontSize: '1rem',
  },
  [Size.LG]: {
    paddingX: '1.5rem',
    paddingY: '0.75rem',
    height: '3rem',
    fontSize: '1.125rem',
  },
  [Size.XL]: {
    paddingX: '2rem',
    paddingY: '1rem',
    height: '3.5rem',
    fontSize: '1.25rem',
  },
  [Size.XXL]: {
    paddingX: '2.5rem',
    paddingY: '1.25rem',
    height: '4rem',
    fontSize: '1.5rem',
  },
};
