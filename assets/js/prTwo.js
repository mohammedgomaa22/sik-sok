

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
    if (size == "30X20") {
        count == 1 ? price.innerHTML = 275 : count == 2 ? price.innerHTML = 499 : count == 3 ? price.innerHTML = 799 : null;
    } else if (size == "45X30") {
        count == 1 ? price.innerHTML = 368 : count == 2 ? price.innerHTML = 699 : count == 3 ? price.innerHTML = 999 : null;
    } else if (size == "67X45") {
        count == 1 ? price.innerHTML = 559 : count == 2 ? price.innerHTML = 1068 : count == 3 ? price.innerHTML = 1577 : null;
    }
    
};

function sendMessToWhatsapp() {
    
    var params = {
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
    };

    if (params.name != "" && params.address != "" && params.phone != "") {
        setTimeout(() => {
            window.location.href = "../../thank.html";
        }, 500);
        var url = "https://wa.me/" + "+905314812248" + "?text="
            + "أريد طلب منتج جديد " + "%0a"
            + "الاســـم: " + params.name + "%0a"
            + "الـعـنـــوان: " + params.address + "%0a"
            + "رقـــم الـهـــاتـــف: " + params.phone + "%0a"
            + "اســـم الـمـنـتـــج: " + "لوحة جدارية ديكورية" + "%0a"
            + "الـمـقـــاس: " + size + "%0a"
            + "الـعـــدد: " + count + "%0a"
            + "الـتـكـلـفـــة: " + price.innerHTML + "%0a"
            window.open(url, '_blank').focus();
    } else {
        alert("يجب ادخال الاسم والعنوان ورقم الهاتف");
    };
};
