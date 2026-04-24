declare module "container/hooks/useStore" {
  function useStore(): {
    signInUser: () => void;
    signOutUser: () => void;
  };

  export default useStore;
}

declare module "container/types/storeState" {
  export type Auth = {
    isLoggedIn: boolean;
  }
}

declare module "container/hooks/useStoreSelector" {
  import type { auth, ProductState } from "container/types/storeState";
  export type RootState = {
    auth: Auth;
  };

  export interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected): TSelected;
    <Selected = unknown>(selector: (state: TState) => Selected): Selected;
  }

  export const useStoreSelector: TypedUseSelectorHook<RootState>;
}

declare module "container/providers/StoreProvider" {
  import React from "react";

  type Props = {
    children: React.ReactNode;
  };
  export default function StoreProvider({ children }: Props): JSX.Element;
}