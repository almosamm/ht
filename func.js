<script>
    var divsToHide = document.getElementsByClassName("blogPts"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    };


document.querySelectorAll('.blogPts').forEach(function(el) {
   el.style.display = 'none';
});
</script>


