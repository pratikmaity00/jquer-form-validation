$(()=> {
    // $('.nameError').hide();
    // $('.mobError').hide();
    // $('.mailError').hide();
    // $('.passError').hide();
    // $('.cpassError').hide();

    let nameFlag = true;
    let mobFlag = true;
    let mailFlag = true;
    let passFlag = true;
    let cpassFlag = true;

    $('#name').on('keyup',nameChecker);
    function nameChecker() {
        let data = $('#name').val();
        // console.log(data);
        let nameRegex = /^[A-Za-z ]{5,30}$/;
        let checkReg = nameRegex.test(data)
        if(data.length<1){
            $('#nameError').show()
            $('#nameError').html('Requred Field*')
            nameFlag = false;
        }else if(!checkReg) {
            $('#nameError').show()
            $('#nameError').html('Provide valid name')
            nameFlag = false;
        }else {
             $('#nameError').hide()
             nameFlag = true;
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
            mobFlag = false;
        }else if(!checkReg) {
            $('#mobError').show()
            $('#mobError').html('Requierd More Numbers')
            mobFlag = false;
        }else {
             $('#mobError').hide()
             mobFlag = true;
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
            mailFlag = false;
        }else if(!checkReg) {
            $('#mailError').show()
            $('#mailError').html('Invalid email Address')
            mailFlag = false;
        }else {
             $('#mailError').hide()
             mailFlag = true;
        }
    }
    $('#pass').on('keyup',passChecker);
    function passChecker() {
        let data1 = $('#pass').val();
        // console.log(data);
        let passRegex = /^[A-Za-z0-9]{6,8}$/;
        let checkReg = passRegex.test(data1)
        if(data1.length<1){
            $('#passError').show()
            $('#passError').html('Requred Field*')
            passFlag = false;
        }else if(!checkReg) {
            $('#passError').show()
            $('#passError').html('Need Strong Password')
            passFlag = false;
        }else {
             $('#passError').hide()
             passFlag = true;
        }
    }
    $('#cpass').on('keyup',cpassChecker);
    function cpassChecker() {
        let data1 = $('#pass').val();
        let data2 = $('#cpass').val();
        // console.log(data);
        
        if(data2.length<1){
            $('#cpassError').show()
            $('#cpassError').html('Requred Field*')
            cpassFlag = false;
        }else if(data1 !== data2) {
            $('#cpassError').show()
            $('#cpassError').html('Password Not Matched')
            cpassFlag = false;
        }else {
             $('#cpassError').hide()
             cpassFlag = true;
        }
    }

    
    $('form').on('submit', function (e) {
        
        // e.preventDefault();
        nameChecker();
        mobChecker();
        mailChecker();
        passChecker();
        cpassChecker();

        if(!nameFlag || !mobFlag || !mailFlag || !passFlag || !cpassFlag) {
            return false;
            alert(`Please Check the form.`)
        }else {
            return true;
        }
    });
});