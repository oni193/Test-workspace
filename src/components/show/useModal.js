import { useState } from 'react';

interface IUseModal {
  isShown: boolean;
  toggle: () => void;
}

const useModal = (): IUseModal => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = (): void => setIsShown(!isShown);
  return {
    isShown,
    toggle,
  };
};

export default useModal;
