window.onload = createAvatars;

function createAvatars() {
    fetch('../assets/member-avatars/members.txt').then(function(response) {
        return response.text();
    }).then(function(data) {
        let memberList = data.split('\n');
        for (var i = 0; i < memberList.length; i++) {
            $('.members').append('<div class="member-profile">' +
                                    // '<img class="avatar" src="../assets/member-avatars/default-avatar.jpg">' +
                                    `<img class="avatar" src="../assets/member-avatars/${memberList[i].split('-')[0].split(' ')[0].toLowerCase() + memberList[i].split('-')[0].split(' ')[1][0].toLowerCase()}.jpg">` +
                                    `<h1 class="member-info">${memberList[i].split('-')[0].trim()}</h1>` +
                                    `<h2 class="member-position">${memberList[i].split('-')[1].trim()}</h2>` +
                                 '</div>');
        }
    });
}