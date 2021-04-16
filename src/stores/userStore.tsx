import create from 'zustand';

type Props = {
  user: {
    id: number;
    name: string;
    profilePicture: string;
  };
};

export const useUserStore = create<Props>(set => ({
  user: {
    id: 1,
    name: 'Sonic',
    profilePicture:
      'https://i.pinimg.com/474x/c3/2b/5f/c32b5f39a0988148ac919d187d276f1d.jpg',
  },
}));
