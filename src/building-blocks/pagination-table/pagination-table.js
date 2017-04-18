const table = document.querySelector('#tblData');
const rows = table.querySelector('tbody').rows.length;
const rowsInPage = 3;
const totalPages = Math.ceil(rows / rowsInPage);
const $pagination = $('<ul class="pages text-center"></ul>');


for (i = 0; i< totalPages; i++) {
    $('<li class="pageNumber">&nbsp;'+ ( i + 1) + '</li>').appendTo($pagination);
}
$(table).after($pagination);

$(table).find('tbody tr:has(td)').hide();
const tr = $('table tbody tr:has(td)');

for(let i = 0; i <= rowsInPage - 1 ; i++) {
    $(tr[i]).show();
}
$pagination.find('li').first().addClass('current');

function showRows(e) {
    e.preventDefault();
    let currentPage = e.target;

    let nBegin = (currentPage.innerText - 1) * rowsInPage;
    let nEnd = currentPage.innerText * rowsInPage -1;

    $(table).find('tbody tr:has(td)').hide();

    $($pagination).find('li').removeClass('current');
    $(currentPage).toggleClass('current');

    for(let i = nBegin; i <= nEnd; i++) {
        $(tr[i]).show();
    }
}



$pagination.on('click', showRows);
