let target;

function startCollapse() {
target = Array.from(document.getElementsByClassName('collapse'));

target.forEach(function (element) {
    element.addEventListener('click', function () {
        console.log('collapse clicked');
        let content = element.nextElementSibling; // Access nextElementSibling of the current element
        if (content.style.display === 'block') {
            element.getElementsByClassName('fa-chevron-down')[0].classList.replace('fa-chevron-down', 'fa-chevron-right');  
            content.style.display = 'none';
        } else {
            collapseAll();
            content.style.display = 'block';
            element.getElementsByClassName('fa-chevron-right')[0].classList.replace('fa-chevron-right', 'fa-chevron-down');  
        }
    });
});
}


function collapseAll() {
    target.forEach(function (element) {
        let content = element.nextElementSibling;
        content.style.display = 'none';
        let chevronDown = element.getElementsByClassName('fa-chevron-down')[0];
        if (chevronDown) {
            chevronDown.classList.replace('fa-chevron-down', 'fa-chevron-right');
        }
    });
}

//listening for custom event triggered by scrollspy.js
document.addEventListener('startCollapse', startCollapse);
