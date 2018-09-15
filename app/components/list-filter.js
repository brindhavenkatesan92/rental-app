import Component from '@ember/component';

export default Component.extend({
    classNames:"list-filter",
    filteredResults:[],
    init(){
        this._super(...arguments);
        this.filterRecords("");
    },
    filterRecords(param){
        this.set("value", param);
        this.filter(...arguments).then((results)=>{
            if(param === this.get("value")){
                this.set("filteredResults", results);
            }
        });
    },
    actions:{
        handleFilter(event){
            this.filterRecords(event.target.value);
        }
    }
});
