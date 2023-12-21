import React, {PropsWithChildren} from 'react';

export const MainLayout = (props: PropsWithChildren) => {
  return (
    <main>
      {props.children}
    </main>
  );
};
