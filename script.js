function setUpGTag(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-TX4ENN3B9B');
}

function sendEvent(name){
    gtag('event', name, {});
}

function delayedRedirect(delayedTime, link){
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    delay(delayedTime).then(() => window.location.replace(link));
}