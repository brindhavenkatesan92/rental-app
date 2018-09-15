
import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        filterByCity(param){
            if(param === ""){
                return this.store.findAll("rental");
            }else{
                return this.store.query("rental", {city:param});
            }   
        }
    }
});
