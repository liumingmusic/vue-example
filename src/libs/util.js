let util = {

};
util.title = function (title) {
    title = title ? title : 'iView project';
    window.document.title = title;
};

export default util;