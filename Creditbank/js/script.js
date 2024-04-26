 document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        const data = {};

        if (error === 0) {
            let formInput = document.querySelectorAll('.form__input');
            let formImage = document.querySelector('.file__input');
            for (let i=0; i < formInput.length; i++)
            {
                data[formInput[i].name] = formInput[i].value;
            }
            data[formImage.name] = formImage.value;
            console.log(JSON.stringify(data));
            alert("Заявка отправлена!");
            formPreview.innerHTML = '';
            form.reset();
        }   
        else {
            alert('Заполните правильно все обязательные поля')
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
        for (let i=0; i< formReq.length; i++)
        {
            const input =  formReq[i];
            formRemoveError(input);
            
            if(input.classList.contains('_fio')) {
                if(!/^[а-я]+$/i.test(input.value)) {
                    formAddError(input);
                    error++;
                }
            }
            else if(input.classList.contains('_pasport')) {
                if(isNaN(Number(input.value)) || input.value.length !== 10) {
                    formAddError(input);
                    error++;
                }
            }
            else if(input.classList.contains('_sum')) {
                if(isNaN(Number(input.value)) || Number(input.value) < 50000 || Number(input.value) > 5000000) {
                    formAddError(input);
                    error++;
                }
            }
            else if(input.classList.contains('_date')) {
                if(isNaN(Number(input.value)) || Number(input.value) < 12|| Number(input.value) > 120) {
                    formAddError(input);
                    error++;
                }
            }
            else if (input.classList.contains('_email')) {
                if(emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } 
            else if (input.classList.contains('_number')) {
                if(numberTest(input)) {
                    formAddError(input);
                    error++;
                }
            } 
            else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            }
            else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }


    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function numberTest(input) {
        return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
    }
    
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    const formImage = document.getElementById('formImage');
    const formPreview = document.getElementById('formPreview');

    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file) 
    {
        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            alert('Разрешены только jpg, png.');
            formImage.value = '';
            return;
        }
        if(file.size > 2 *1024 * 1024) {
            alert('Файл должен быть менее 2 МБ.');
            return;
        }
        let reader = new FileReader();
        reader.onload = function (e) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="фото">`;
        };
    
        reader.onerror = function (e) {
        alert('Ошибка');
        };
        reader.readAsDataURL(file);  
    }
});

