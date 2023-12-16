$(document).ready(function() {
    $('#btnClique').click(function() {
        $(this).addClass('hidden');
        $('#botaoCompleto').removeClass('hidden');
    });

    $('#btnAdicionar').on('click', function() {
        var inputText = $('#novoTweet').val();

        if(inputText.length === 0) {
            alert('O campo está vazio! Tente novamente.');
            return;
        }

        var novoItemLista = $('#tweetEnzo').clone(); // Corrigindo a clonagem do item

        novoItemLista.find('.postConteudo p').text(inputText); // Atualizando o texto

        $('#listaTweets').prepend(novoItemLista);

        $('#novoTweet').val('');
    });

    $('.imagensWrapper .modal-image').click(function() {
        var imageUrl = $(this).attr('src');
        $('#fullImage').attr('src', imageUrl);
        $('#modal').css('display', 'block');
    });

    $('.close').click(function() {
        $('#modal').css('display', 'none');
    });

    $(document).on('click', '.deletarItem', function() {
        $(this).closest('li.postBody').remove();
    });
  });