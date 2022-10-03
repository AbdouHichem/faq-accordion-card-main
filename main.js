
let dt = document.getElementsByTagName("dt");
console.log(faq);

for (let i = 0; i < dt.length; i++) {
    dt[i].addEventListener("click", function () {
        
        
        this.classList.toggle("active");

        var dd = this.nextElementSibling;

        if (dd.classList.contains('hide')) {
            dd.classList.remove('hide');
        } else {
            dd.classList.add('hide');
        }
    });
}