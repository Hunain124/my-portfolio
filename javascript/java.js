  // // Show loader when the page starts loading
        // document.addEventListener("DOMContentLoaded", function() {
        //     document.getElementById("loader").style.display = "block";
        // });

        // // Hide loader when the page finishes loading
        // window.addEventListener("load", function() {
        //     document.getElementById("loader").style.display = "none";
        // });

        // preloader
        document.addEventListener("DOMContentLoaded", function () {
            setTimeout(function () {
                document.getElementById('preloader').style.display = 'none';
                document.getElementById('content').style.display = 'block';
            }, 3000);
        });

        document.querySelectorAll('button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');