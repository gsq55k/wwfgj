export function TMap() {
          return new Promise(function (resolve, reject) {
               window.init = function () {
              resolve(qq)//注意这里
         }
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://map.qq.com/api/gljs?v=1.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77";
        script.onerror = reject;
        document.head.appendChild(script);
      })
    }