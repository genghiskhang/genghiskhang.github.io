window.onload = createAvatars;

function createAvatars() {
    fetch('../assets/global/members.txt').then(function(response) {
        return response.text();
    }).then(function(data) {
        let memberList = data.split('\r\n');
        for (var i = 0; i < memberList.length; i++) {
            $('.members').append('<div class="member-profile">' +
                                    `<img class="avatar" src="../assets/member-avatars/${1}">` +
                                    `<h1 class="member-info">${memberList[i].split('-')[0].trim()}</h1>` +
                                    `<h2 class="member-position">${memberList[i].split('-')[1].trim()}</h2>` +
                                 '</div>');
        }
    });
}