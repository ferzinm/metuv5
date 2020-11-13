var yandex = {
    "v1": 51664004,
    "v2": 51664085,
    "v3": 51664100,
    "v4": 51664124,
    "v5": 51664160,
    "v6": 53567128,
    "v7": 53567137,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('de', '').replace('39', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('de', '')
        .replace('39', '')
        .replace('confirm.html', '');

}
yandexId = yandex[site];

console.log(site);

(function (d, w, c, id) {
    (w[c] = w[c] || []).push(function () {
        try {
            var n = 'yaCounter' + id;
            w.n = new Ya.Metrika({
                id: id,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            });
        } catch (e) {
        }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () {
            n.parentNode.insertBefore(s, n);
        };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(document, window, "yandex_metrika_callbacks", yandexId);
