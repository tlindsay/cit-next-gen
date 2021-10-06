export default function phaser(setting) {
  switch (setting) {
    case 'kill':
      return 'PEW PEW';
    case 'stun':
      return 'pew pew';
    default:
      return 'no pew pews';
  }
}
