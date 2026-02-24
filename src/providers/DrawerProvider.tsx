import React, { FC, PropsWithChildren, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { SwipeableDrawer } from '@mui/material';

const styles = ({
  drawer: {
    width: { xs: '85%', md: '70%', lg: '30%' },
    maxWidth: '400px',
    background: 'rgba(5, 5, 8, 0.85)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
  },
});

export interface IShowDrawer<T> {
  component: React.FC<T>;
  componentProps: T;
  onCloseDrawer?: () => void;
}

interface IDrawerContextProps {
  showDrawer: <T>(props: IShowDrawer<T>) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const DrawerContext = React.createContext<IDrawerContextProps>({} as IDrawerContextProps);

interface IDrawerProps extends PropsWithChildren {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const Drawer: FC<IDrawerProps> = ({ open, openDrawer, closeDrawer, children }) => {
  return (
    <SwipeableDrawer
      sx={{
        zIndex: 9999
      }}
      anchor="right"
      open={open}
      onOpen={openDrawer}
      onClose={closeDrawer}
      transitionDuration={500}
      PaperProps={{ sx: styles.drawer }}
    >
      {children}
    </SwipeableDrawer>
  );
};

const DrawerProvider = (props: any) => {
  const [open, setOpen] = useState(false);
  const [DrawerCreator, setDrawerCreator] = useState<React.FC | null>(null);
  const [drawerProps, setDrawerProps] = useState<any>({});
  const [content, setContent] = useState<ReactElement | null>(null);
  const [onCloseDrawer, setOnCloseDrawer] = useState<(() => void) | undefined>(undefined);

  useEffect(
    () => {
      if (DrawerCreator && drawerProps) {
        setContent(<DrawerCreator {...drawerProps} />);
      }
    },
    [DrawerCreator, drawerProps]
  );

  const showDrawer = useCallback(<T,>({ component, componentProps, onCloseDrawer: onCloseDrawerP }: IShowDrawer<T>) => {
    setDrawerCreator(() => component as any);
    setDrawerProps(componentProps);
    setOnCloseDrawer(onCloseDrawerP)
    setOpen(true);
  }, []);

  const openDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
    setDrawerProps({});
    setContent(null);
    setDrawerCreator(null);
    onCloseDrawer?.();
  }, [onCloseDrawer]);

  const value = useMemo(() => ({
    showDrawer, closeDrawer, openDrawer,
  }), [closeDrawer, openDrawer, showDrawer]);

  return (
    <DrawerContext.Provider
      value={value}
    >
      {props.children}
      <Drawer
        open={open}
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
      >
        {content}
      </Drawer>
    </DrawerContext.Provider>
  );
};

const useDrawer = () => React.useContext(DrawerContext);

export { DrawerProvider, useDrawer };
