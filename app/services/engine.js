import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EngineService extends Service {
  @tracked _impulseSpeed = 1;
  @tracked _warpFactor = 0;

  get warpFactor() {
    return this._warpFactor;
  }

  get impulseSpeed() {
    return this._impulseSpeed;
  }

  get isWarp() {
    return this.warpFactor > 0;
  }

  get isImpulse() {
    return !this.isWarp;
  }

  get warpCoreStatus() {
    return this.warpFactor < 9.6 ? 'STABLE' : 'UNSTABLE';
  }

  goToWarp(warpSpeed = 1) {
    if (warpSpeed > 9.8) {
      console.warn(`I'm givin' it all she's got, Captain!`);
      warpSpeed = 9.8;
    }

    this._warpFactor = warpSpeed;
    this._impulseSpeed = 0;
  }

  goToImpulse(impulseSpeed = 1) {
    if (impulseSpeed > 1) {
      impulseSpeed = 1;
    } else if (impulseSpeed < -1) {
      impulseSpeed = -1;
    }

    this._warpFactor = 0;
    this._impulseSpeed = impulseSpeed;
  }

  fullStop() {
    this._warpFactor = 0;
    this._impulseSpeed = 0;
  }

  maximumWarp() {
    this.goToWarp(8.2);
  }
}
