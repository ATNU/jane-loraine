
$(document).ready(function () {
    // load in the external HTML file once the page is ready
    $(xmlPanel).load('loraine.html');

    // set a timeout so that waypoints aren't created before the HTML has loaded
    setTimeout(function () {
        // create waypoints for each element with a class pagebreak
        $('.pagebreak').waypoint(function () {
            // when a waypoint is triggered, get the image name to display
            console.log('waypoint triggered2');
            const el = $(this)[0]['element'];
            const a = el.getElementsByTagName('a');
            const url = a[0]['href'];
            // get image file name only (as images are stored in a directory) (for local and gitHub pages versions)
            const localName = url.replace('http://localhost:63342/jane-loraine/', '');
            const imgName = localName.replace('https://atnu.github.io/jane-loraine/', '');

            // replace contents of the imgPanel with the image
            console.log(imgName);
            document.getElementById('pageImg').setAttribute('src', 'pages/' + imgName);
        }, {
            // look for waypoints within the xmlPanel window
            context: document.getElementById('xmlPanel'),
            // change image when the waypoint is half way up the xml panel
            offest: '50%'
        })

    }, 500);
});


function scrollToTop() {
    $(xmlPanel).animate({scrollTop: 0}, 100);
}



/* When the user clicks on the button, toggle between hiding and showing the dropdown content (required for touch screen devices)*/
function GIDropdown() {
    document.getElementById("GIDropdown").classList.toggle("show");
}

function TIDropdown() {
    document.getElementById("GIDropdown").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
