import Model, { attr, hasMany } from '@ember-data/model';

export default Model.extend({
  name: attr('string'),
  registry: attr('string'),
  shipClass: attr('string'),

  crewMembers: hasMany('officer'),
});
