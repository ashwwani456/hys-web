 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');


   /*Update with yours config*/
  const firebaseConfig = {
    apiKey: "AIzaSyAsS6xMQewKaayfUQrSccSWSRI4EEfCgS0",
    authDomain: "hys-pro-41c66.firebaseapp.com",
    databaseURL: "https://hys-pro-41c66-default-rtdb.firebaseio.com",
    projectId: "hys-pro-41c66",
    storageBucket: "hys-pro-41c66.appspot.com",
    messagingSenderId: "728627807478",
    appId: "1:728627807478:web:14af922de235285e0658d7",
    measurementId: "G-P503Q821B4"
 };
  firebase.initializeApp(firebaseConfig);


  const messaging = firebase.messaging();
//  messaging.setBackgroundMessageHandler(function (payload) {
//      const promiseChain = clients
//          .matchAll({
//              type: "window",
//              includeUncontrolled: true
//          })
//          .then(windowClients => {
//              for (let i = 0; i < windowClients.length; i++) {
//                  const windowClient = windowClients[i];
//                  windowClient.postMessage(payload);
//              }
//          })
//          .then(() => {
//              return registration.showNotification("New Message");
//          });
//      return promiseChain;
//  });
//  self.addEventListener('notificationclick', function (event) {
//      console.log('notification received: ', event)
//  });

//
//
//  const messaging = firebase.messaging();
//  messaging.onBackgroundMessage(function(payload) {
//
//        const promiseChain = clients
//            .matchAll({
//                type: "window",
//                includeUncontrolled: true
//            })
//            .then(windowClients => {
//                for (let i = 0; i < windowClients.length; i++) {
//                    const windowClient = windowClients[i];
//                    windowClient.postMessage(payload);
//                }
//            })
//            .then(() => {
//                return registration.showNotification('Calling', {
//                                                              body: "Incoming call",
//                                                              icon: '../images/touch/chrome-touch-icon-192x192.png',
//                                                              vibrate: [200, 100, 200, 100, 200, 100, 200],
//                                                              tag: payload.notification.title
//                                                            });
//
//
//            });
//        return promiseChain;
//
//
//  });


messaging.onBackgroundMessage(function (payload) {

console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
         //   const title = payload.notification.title;
            const options = {
                body: "Vivan is calling you",
                data: {
                click_action: "https://www.examples.com/",

                },
                 actions: [
                           {
                             action: 'archive',
                             title: 'Accept'
                           }
                         ]
              };
              window.functionName();
            return registration.showNotification("Calling", options);
        });
    return promiseChain;
});


self.onnotificationclick = (event) => {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

   if (event.action === 'archive') {

      window.functionName(); // or functionName()

    }

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then((clientList) => {
    for (const client of clientList) {
      if (client.url === '/' && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow){
     window.functionName();
      return clients.openWindow('/');
    }

  }));
};


//self.addEventListener('notificationclick', function (event) {
//    if (!event.action) {
//    // Was a normal notification click
//    console.log('Notification Click.');
//    self.clients.openWindow(event.notification.data.click_action, '_blank')
//    event.notification.close();
//    return;
//    }else{
//    event.notification.close();
//    }
//});

//self.addEventListener('notificationclick', (event) => {
//    event.notification.close()
//    console.log('Notification Click.');
//    const pathname = event.notification?.data?.FCM_MSG?.notification?.data?.link
//    if (!pathname) return
//    const url = new URL(pathname, self.location.origin).href
//
//    event.waitUntil(
//        self.clients
//            .matchAll({ type: 'window', includeUncontrolled: true })
//            .then((clientsArr) => {
//                const hadWindowToFocus = clientsArr.some((windowClient) =>
//                    windowClient.url === url ? (windowClient.focus(), true) : false
//                )
//
//                if (!hadWindowToFocus)
//                    self.clients
//                        .openWindow(url)
//                        .then((windowClient) =>
//                            windowClient ? windowClient.focus() : null
//                        )
//            })
//    )
//})