(function() {
  "use strict";

  fb.events.form.mounted = [function (state) {
    // フォームのコンテンツ部分の要素を取得します
    var formContent = document.getElementsByClassName('fb-content')[0];

    // ボタンを作成します
    var submitButton = document.createElement('input');
    submitButton.type = 'button';
    submitButton.value = 'submit';
    // ボタンが押された際に現在のフォームを強制的に回答するように設定します
    submitButton.onclick = fb.forceSubmitForm;

    // 作成したボタンをフォームのコンテンツ部分の要素の先頭に追加します
    formContent.insertBefore(submitButton, formContent.firstChild);
    console.log(formContent);

    return state;
  }];
})();


/*
TimerexCalendar({
        'guest_company' : 'Mixtend Inc.',
        'guest_name' : 'Tomohiro Kitano',
        'guest_email' : 'xxxxxxxx@test.com',
        'locale': 'ja',
        'primary_color': '#2980b9'
    });
*/
