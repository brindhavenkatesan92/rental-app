import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return this.store.findAll("rental");
  },
  afterModel() {
    console.log("afterModel", arguments)
  },
  //   renderTemplate() {
  //     console.log("renderTemplate", arguments);
  //   },
  activate() {
    console.log("activate", arguments);
  },
  deactivate() {
    console.log("deactivate", arguments);
  },
  setupController(controller, model) {
    //If we override this, we should set otherwise model is npt dispalyed else dont override
    controller.set('model', model);
    console.log("setUpController", arguments);
  },
  actions: {
    willTransition(transition) {
      console.log("willTransition", arguments);
      //   transition.abort();
    }
   
  }
});
