import LockIcon from './LockIcon.vue';

export default {
  component: LockIcon,
  title: 'Lock & Unlock/LockIcon',
  tags: ['autodocs'],
};

export const Locked = {
  args: {
    isLocked: true,
    isDisabled: false,
  },
};
export const Unlocked = {
  args: {
    isLocked: false,
    isDisabled: false,
  },
};
export const Disabled = {
  args: {
    isDisabled: true,
  },
};