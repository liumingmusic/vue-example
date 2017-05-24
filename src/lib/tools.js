const STORAGE_KEY = 'todo-list';
export default {
    //获取数据
    fetch: function () {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
    },
    /**
     * 保存数据
     * @param obj 保存的对象值
     */
    save: function (obj) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    },
    /**
     * 删除某个值
     * @param items 键
     * @param index 下标
     * @returns {Array} 返回新数组
     */
    remove: function (items, index) {
        var newItems = [];
        var length = items.length;
        for (var i = 0; i < length; i++) {
            if (i !== index) {
                newItems.push(items[i]);
            }
        }
        return newItems;
    }
}
