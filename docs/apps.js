function addAccount() {
    const row = document.getElementById('account-row');
    const newCol = document.createElement('div');
    newCol.className = 'col-auto';
    newCol.innerHTML =  '<div class="current-account-box"></div>';
    row.insertBefore(newCol, row.lastElementChild);
}