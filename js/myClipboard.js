/*页面载入完成后，创建复制按钮*/
$(function () {
    !function (e, t, a) {
        /* code */
        var initCopyCode = function () {
            var copyHtml = '';
            var enjoyArr = ['🧐', '😛', '🤨', '🤠', '😎', '🙂', '💘', '😃', '😁', '😍'];
            var eIndex = parseInt(Math.random() * 10);

            copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
            copyHtml += '<i class="copyLove">' + enjoyArr[eIndex] + '</i><span>复制</span>';
            copyHtml += '</button>';

            $(".highlight code pre").before(copyHtml);

            new ClipboardJS('.btn-copy', {
                target: function (trigger) {
                    $.Toasters('成功', '已复制到剪切板', 'success', {
                        stack: true,
                        has_icon: true,
                        has_close_btn: true,
                        fullscreen: false,
                        timeout: 3000,
                        sticky: false,
                        has_progress: true,
                        rtl: false,
                    });
                    return trigger.nextElementSibling;
                }
            });
        }
        initCopyCode();
    }(window, document);
})
