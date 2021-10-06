import Model, { attr, belongsTo } from '@ember-data/model';
import { computed, get } from '@ember/object';

export default Model.extend({
  name: attr('string'),
  rank: attr('string'),

  currentPosting: belongsTo('starship'),

  currentTitle: computed('rank', 'currentPosting.name', function () {
    return `${this.rank} of the USS ${get(this, 'currentPosting.name')}`;
  }),
});
