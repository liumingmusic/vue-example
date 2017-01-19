const STORAGE_KEY = 'todo-list';
export default {
    fetch: function() {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    },
    save: function(obj) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    },
    remove: function(items, index) {
    	var newItems = [];
    	var length = items.length;
    	for(var i = 0; i < length; i++){
    		if(i !== index){
    			newItems.push(items[i]);
    		}
    	}
    	return newItems;
    }
}
