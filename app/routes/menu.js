import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('menu-section');
  },
  actions: {
    removeMenuGroupItem(menuGroupItem) {
      menuGroupItem.get('menuGroup.menuGroupItems').removeObject(menuGroupItem);
      menuGroupItem.get('menuGroup').save();
    },
    saveMenuGroupSort(menuSection) {
      menuSection.get('menuGroups').map(function(menuGroup) {
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
