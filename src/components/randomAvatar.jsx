// randomAvatar.js

export function getRandomAvatar() {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  return `images/avatari/A${randomNumber}.png`;
}
