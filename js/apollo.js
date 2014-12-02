(function(){

    var js_fils = [
        'http://underscorejs.org/underscore-min.js',
        'js/tpl.js',
        'js/page_util.js',
        'js/mustache.js',
    ];
    js_fils.map(function(url){loadScript(url, main, counter())});
    
    function main(){
        var html = tpl.top_control_panel;
        $('body').css('padding-top', '50px');
        $('body').append(html);

        var lastelem;
        var bg_color;

        document.onmouseover = function (e) {
            var event = e || window.event;
            var target = event.target || event.srcElement;
            document.getElementById('display').innerHTML = page_util.csspath_without_id(target);

            if (lastelem) {
                lastelem.style.background = bg_color;
            }
            bg_color = target.style.background;
            target.style.background = "#FF9933";
            lastelem = target;
        };
    }

    function counter(){
        var total = js_fils.length;
        cnt = 0;
        add = function(){cnt+=1; return cnt==total;}
        return add;
    }

    function loadScript(url, callback, add){
        var script = document.createElement("script")
        script.type = "text/javascript";
        script.onload = function(){
            if(add()){callback();}
        };
        script.src = url;
        document.body.appendChild(script);
    }
})();
