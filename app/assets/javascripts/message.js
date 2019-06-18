$(document).on('turbolinks:load', function() {
  // 非同期通信
  function buildHTML(message) {
    var addImage = message.image ? `<img src='${message.image}'> ` : '';
    var html = `
      <div class="message" data-message-id="${message.id}">
        <div class="upper-message" data-message-id="${message.id}">
          <div class="upper-message__user-name">${message.name}</div>
          <div class="upper-message__date">${message.date}</div>
        </div>
        <div class="lower-meesage">
          <p class="lower-message__content">${message.content}</p>
          ${addImage}
        </div>
      </div>`;
    return html;
  };

$('.new_message').on('submit', function(e) {
    e.preventDefault();
    var formdata = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formdata,
      dataType: 'json',
      contentType: false,
      processData: false
    })
    .done(function(message) {
      var html = buildHTML(message);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight}, "fast");
      $('#new_message')[0].reset();
    })
    .fail(function() {
      alert('メッセージを入力してください');
    })
    .always(function() {
      $('.form__submit').prop('disabled', false);
    })
  });

  // 自動更新
    $(function() {
        setInterval(update, 5000);
    });
    function update(){

       if (location.pathname.match(/\/groups\/\d+\/messages/)) {
        var message_id = $('.message') ? $('.message:last').data('message-id') : 0;
        $.ajax({
          url: "api/messages",
          type: 'GET',
          data: { id: message_id },
          dataType: 'json'
        })
        .done(function(data){
          if (data.length !== 0){
          data.forEach(function(data){
            var html = buildHTML(data);
            $('.messages').append(html);
            $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight}, "fast");
          })
          }
        })
        .fail(function(){
          alert('自動更新に失敗しました')
        })
      }
    }

});
