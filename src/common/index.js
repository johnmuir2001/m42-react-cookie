// export function writeCookie(key, value, days) {
//     const date = new Date();
//     // get current date and time

//     days = days || 365;

//     date.setTime(+ date + (days * 86400000));
//     // 86400000 = number of milliseconds in a day 24 * 60 * 60 * 1000
//     // setTime takes current time and adds the number of days for cookie to exist
    
//     const cookie = document.cookie = key + "=" + value + "; expires =" + date.toGMTString() + "; path=/";
//     console.log(cookie);

//     return cookie;
// };

// export function getCookie(cookiename) {
//     const name = cookiename + "=";
//     const decodedCookie = decodeURIComponent(document.cookie);
//     console.log(decodedCookie);
//     const cookieArray = decodedCookie.split(";");
//     for (let index=0; index < cookieArray.length; index++) {
//         let c = cookieArray[index];
//         while (c.charAt(0) === " ") {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) === 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return false;
// }