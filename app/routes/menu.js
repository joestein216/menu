import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('menu-group');
  },
  actions: {
    saveMenuGroupSort() {
      let menuModel = this.modelFor('menu');

      menuModel.map(function(menuGroup) {
        menuGroup.set('position', 1);
        menuGroup.save();
      });
    },
    saveMenuGroupItemsSort(menuGroup) {
      menuGroup.get('menuGroupItems').map(function(menuGroupItem) {
        menuGroupItem.set('position', 1);
        menuGroupItem.save();
      });
    }
  }
});
