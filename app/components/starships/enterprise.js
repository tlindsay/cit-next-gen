import Component from '@ember/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EnterpriseComponent extends Component {
  @service engine;

  captain = 'Jean-Luc Picard';
  firstOfficer = 'William Riker';
  secondOfficer = 'Data';
  medicalOfficer = 'Beverly Crusher';
  chiefEngineer = 'Geordi La Forge';
  tacticalOfficer = 'Worf';

  constructor() {
    super(...arguments);
    this.engine.fullStop();
  }

  didRender() {
    super.didRender(...arguments);
    this.captain = 'data';
  }

  @action engage() {
    this.engine.maximumWarp();
  }
}
