import Component from '@ember/component';

export default Component.extend({
  imageClass: "",
  actions: {
    toggleImageSize() {
      this.toggleProperty("isWide");
      this.set("imageClass", this.get("isWide") ? "wide" : "");
    }
  }
});
