import Route from '@ember/routing/route';

export default Route.extend({
    model({rental_id}){
        return this.store.find("rental", rental_id);
    }
});
