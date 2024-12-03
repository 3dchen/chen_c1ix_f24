document.getElementById('exit').onclick = function() {
    window.location.href = 'file:///Users/sandy/Desktop/chen_c1ix_f24/index.html';
};

document.getElementById('notebook').onclick = function() {
    var notebook = document.getElementById('notebook');
    var luck = document.getElementById('luck');
    var footer = document.getElementById('footer');
    notebook.style.display = 'none'; // Hide the notebook image
    luck.style.display = 'block'; // Show the luck image
    footer.style.display = 'none'; // Hide the footer text
};
