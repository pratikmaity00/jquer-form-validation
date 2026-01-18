$(()=> {
    // $('.nameError').hide();
    // $('.mobError').hide();
    // $('.mailError').hide();
    // $('.passError').hide();

    $('#name').on('keyup',nameChecker);
    function nameChecker() {
        let data = $('#name').val();
        // console.log(data);
        let nameRegex = /^[A-Za-z ]{5,30}$/;
        let checkReg = nameRegex.test(data)
        if(data.length<1){
            $('#nameError').show()
            $('#nameError').html('Requred Field*')
        }else if(!checkReg) {
            $('#nameError').show()
            $('#nameError').html('Invalid Field')
        }else {
             $('#nameError').hide()
        }
    }

    $('#mob').on('keyup',mobChecker);
    function mobChecker() {
        let data = $('#mob').val();
        // console.log(data);
        let mobRegex = /^\d{7,15}$/;
        let checkReg = mobRegex.test(data)
        if(data.length<1){
            $('#mobError').show()
            $('#mobError').html('Requred Field*')
        }else if(!checkReg) {
            $('#mobError').show()
            $('#mobError').html('Invalid Field')
        }else {
             $('#mobError').hide()
        }
    }
    $('#mail').on('keyup',mailChecker);
    function mailChecker() {
        let data = $('#mail').val();
        // console.log(data);
        let emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
        let checkReg = emailRegex.test(data)
        if(data.length<1){
            $('#mailError').show()
            $('#mailError').html('Requred Field*')
        }else if(!checkReg) {
            $('#mailError').show()
            $('#mailError').html('Invalid Field')
        }else {
             $('#mailError').hide()
        }
    }
    $('#pass').on('keyup',passChecker);
    function passChecker() {
        let data = $('#pass').val();
        // console.log(data);
        let passRegex = /^[A-Za-z0-9]{6,20}$/;
        let checkReg = passRegex.test(data)
        if(data.length<1){
            $('#passError').show()
            $('#passError').html('Requred Field*')
        }else if(!checkReg) {
            $('#passError').show()
            $('#passError').html('Invalid Field')
        }else {
             $('#passError').hide()
        }
    }

    
    $('form').on('submit', function (e) {
        e.preventDefault();

        let isNameValid = nameChecker();
        let isMobValid  = mobChecker();
        let isMailValid = mailChecker();
        let isPassValid = passChecker();

        if (isNameValid && isMobValid && isMailValid && isPassValid) {
            alert('Form Submitted Successfully ✅');
            this.submit(); // or AJAX submit
        }
    });
});