define(['styleselect'], function (styleSelect) {
    var log = console.log.bind(console);

    styleSelect('select');

    // Rest of code is for demonstration purposes...
    var selectBoxes = document.querySelectorAll('select');

    if (selectBoxes.length) {
        selectBoxes.forEach(function (selectBox, index) {
            var demoBinding = new Ractive({
                el: document.querySelectorAll('p.result')[index],
                template: 'Value of real select box is currently {{ value }}',
                data: {value: selectBox.value}
            });

            selectBox.addEventListener('change', function () {
                demoBinding.set('value', selectBox.value)
            });
        });
    }
});