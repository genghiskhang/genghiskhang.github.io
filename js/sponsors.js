// window.onload = loadSponsors;

// function loadSponsors() {
//     fetch('../assets/sponsors/spnsrs.txt').then(function(response) {
//         return response.text();
//     }).then(function(data) {
//         let sponsorList = data.split('\n');
//         for (var i = 0; i < sponsorList.length; i++) {
//             if (i % 2 == 0) {
//                 $('.spnsr-main > table > tbody').append(`<tr></tr>`);
//             }
//             $('.spnsr-main > table > tbody > tr').append(`<td><img class="spnsr-img" src="../assets/sponsors/${sponsorList[i].split('-')[1].trim()}.png"></td>`);
//         }
//     })
// }