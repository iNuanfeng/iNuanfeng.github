$(function() {
  var $searchBar = $('#searchBar'),
    $searchResult = $('#searchResult'),
    $searchText = $('#searchText'),
    $searchInput = $('#searchInput'),
    $searchClear = $('#searchClear'),
    $searchCancel = $('#searchCancel');

  function hideSearchResult() {
    $searchResult.hide();
    $searchInput.val('');
  }

  function cancelSearch() {
    hideSearchResult();
    $searchBar.removeClass('weui-search-bar_focusing');
    $searchText.show();
  }

  $searchText.on('click', function() {
    $searchBar.addClass('weui-search-bar_focusing');
    $searchInput.focus();
  });
  $searchInput
    .on('blur', function() {
      if (!this.value.length) cancelSearch();
    })
    .on('input', function() {
      if (this.value.length) {
        searchUsers(this.value);
        $searchResult.show();
      } else {
        $searchResult.hide();
      }
    });
  $searchClear.on('click', function() {
    hideSearchResult();
    $searchInput.focus();
  });
  $searchCancel.on('click', function() {
    cancelSearch();
    $searchInput.blur();
  });

  // 搜索用户
  function searchUsers(val) {
    var count = 0;
    var userResult = null;
    for (var i = 0; i < USERS.length; i++) {
      if (val === USERS[i].name || val === USERS[i].mobile) {
        userResult = USERS[i];
        break;
      }
    }

    if (userResult) {
      var html = '<div class="weui-cell weui-cell_access user-list" data-info=' + JSON.stringify(userResult) + '>' +
        '<div class="weui-cell__bd weui-cell_primary">' +
        '<p>' + userResult.name + ' (' + userResult.mobile + ')' + '</p>' +
        '<p>' + userResult.place + '</p>' +
        '</div>' +
        '</div>'
      $('#searchResult').html(html);
    } else {
      $('#searchResult').html('');
    }
  }

  function bindEvents() {
    $(document).on('click', '.user-list', function() {
      var userInfo = $(this).data('info');
      $('#J_ResultName').html(userInfo.name + ' ' + userInfo.mobile);
      $('#J_ResultPlace').html(userInfo.place);
      $('#J_Result').show();
      hideSearchResult();
    })
  }

  bindEvents();
  
});