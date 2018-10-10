var app = new Vue({
    el: '.j_app',
    data: {
        message: 'Hello Vue!',
        tooltip: 'You loaded this page on ' + new Date().toLocaleString(),
        seen: false,
    }
});