

var price = document.getElementById('price'),
    count = 1,
    size = '39X30',
    sizeOptions = document.querySelectorAll('[name="sizeOption"]');
    selectNumber = document.querySelectorAll('[name="selectNumber"]');

function getTotal() {
    
    sizeOptions.forEach(sizeOp => {
        sizeOp.checked ? size = sizeOp.value : null;
    });
    selectNumber.forEach(numOp => {
        numOp.checked ? count = numOp.value : null;
    });

    // ------------
    if (size == "17X50") {
        count == 1 ? price.innerHTML = 499 : count == 2 ? price.innerHTML = 798 : count == 3 ? price.innerHTML = 1050 : null;
    }
    
};

function sendMessToWhatsapp() {
    
    var params = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
    };

    if (params.name != "" && params.address != "" && params.phone != "") {
        var url = "https://wa.me/" + "+905314812248" + "?text="
            + "أريد طلب منتج جديد " + "%0a"
            + "الاســـم: " + params.name + "%0a"
            + "الـعـنـــوان: " + params.address + "%0a"
            + "رقـــم الـهـــاتـــف: " + params.phone + "%0a"
            + "اســـم الـمـنـتـــج: " + "وحدة إضاءة ديكورية" + "%0a"
            + "الـمـقـــاس: " + size + "%0a"
            + "الـعـــدد: " + count + "%0a"
            + "الـتـكـلـفـــة: " + price.innerHTML + "%0a"
            window.open(url, '_blank').focus();
            // alert("شكراً لك سيتم الرد عليك في اقرب وقت");
    } else {
        alert("يجب ادخال الاسم والعنوان ورقم الهاتف");
    };
};
