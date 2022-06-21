$('header').localScroll();

function validation() {
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;
  
    if (name == '' || name == null) {
        alert("Enter Name");
      return false;
    } else if (email == "" || email == null) {
        alert("Enter Email");
        return false;
    } else if(message == "" || message == null){
        alert("Enter Message");
        return false;
    }else{
        return true;
    }
    
  }