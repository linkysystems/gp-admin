import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.irregular('rg-publication', 'rg-publication');
inflector.uncountable('rg-publication');

export default DS.Model.extend({
  published: DS.attr('boolean'),
  highlighted: DS.attr('number'),
  showInLists: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  allowComments: DS.attr('boolean', {
    defaultValue: 'true'
  }),
  title: DS.attr('string'),
  about: DS.attr('string'),
  body: DS.attr('string'),
  publishedAt: DS.attr('date'),
  categoryItem: DS.attr(),
  setAlias: DS.attr(),
  attachment: DS.attr('array'),
  featuredImage: DS.attr('array'),
  images: DS.attr('array'),
  tags: DS.attr(),
  category: DS.attr(),
  linkPermanent: DS.attr(),
  metadata: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  creator: DS.belongsTo('user', {
    async: true
  })
});