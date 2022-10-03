
let faq = document.getElementsByTagName("dt");
console.log(faq);

for (let i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        
        console.log(faq[i]);
        this.classList.toggle("active");

        var body = this.nextElementSibling;

        if (body.classList.contains('hide')) {
            body.classList.remove('hide');
        } else {
            body.classList.add('hide');
        }
    });
}