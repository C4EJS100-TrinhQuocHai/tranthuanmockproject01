let listTruyen=[
    {
         Name: "Nhất thống thiên hạ",
         author:"Sheepboy",
         intro : "Truyện kể về một người xã hội đen xuyên về triều Lý",
         type: "Dã sử",
         Status: "Free",
         img: "./image/1.jpg"
    },
    {
        Name: "Bắt đầu tại Hải tặc thế giới",
        author:"KiveS",
        intro : "Truyện kể về một thanh niên xuyên vào thế giới One Pice",
        type: "Đồng nhân",
        Status: "Free",
        img: "./image/2.jpg"
   },
   {
        Name: "Hùng ca Đại Việt ",
        author:"Sheepboy",
        intro : "Truyện kể về một người xã hội đen xuyên về thời kỳ Bắc thuộc",
        type: "Dã sử",
        Status: "Free",
        img:"./image/3.jpg"
    },
    {
        Name: "Thịnh thế Diên Ninh ",
        author:"Hàm Ngư",
        intro : "Truyện kể về một thanh niên xuyên về thời kỳ Lê Nhân Tông",
        type: "Dã sử",
        Status: "Premium",
        img:"./image/4.jpg"
    },
    {
        Name: "Thiên mệnh chiến :Quần Lâm thiên hạ ",
        author:"Chân mộng",
        intro : "Truyện kể về  một tác giả xuyên không, tham gia cuộc chiến tranh đoạt thiên mệnh.",
        type: "khoa huyễn",
        Status: "Premium",
        img:"./image/5.jpg"
    },
    {
        Name: "Thần nguyên kỷ ",
        author:"Chân mộng",
        intro : "Tại thế giới có Siêu Phàm lực lượng bên trong, tất cả đạo lý hay là lời nói phát ra từ miệng kẻ yếu đều là như vậy lộ ra bất lực cùng không có ý nghĩa",
        type: "Khoa huyễn",
        Status: "Free",
        img:"./image/6.jpg"
    },
    {
        Name: "Nhất Kiếp Tiên Phàm",
        author:"Chân mộng",
        intro : "Bạn đã chán ngán truyện tu tiên não tàn?Bạn đã quá ngán với khí vận chi tử, ",
        type: "Tiên hiệp",
        Status: "Free",
        img:"./image/9.jpg"
    },
    {
        Name: "Đại Việt Chúa Tể ",
        author:"Chân mộng",
        intro : "Sông núi nước Nam, vua Nam ở Rành rành định phận ở sách trời",
        type: "Xuyên không",
        Status: "Free",
        img:"./image/10.webp"
    },
    {
        Name: "Nhiệt Huyết Kháng Chiến ",
        author:"Chân mộng",
        intro : "Người ta thường hay nói, người Việt Nam thế kỷ XX là thế hệ vĩ đại nhất. Thế nhưng có mấy ai biết, để trở nên vĩ đại, thế hệ ấy đã trải qua những gì?",
        type: "Dã sử",
        Status: "Free",
        img:"./image/11.jpg"
    },

]
function showTruyen() {
let p=document.getElementById("wrapper");
console.log(p);
let result= "";
for(let i=0; i<listTruyen.length; i++){
    result +=`
    <div id="item">
        <a href=""><img src="${listTruyen[i].img}" style="height: 120px;" alt="a"></a>
                <div id="item-body">
                <div id="body-tren">
                    <p onclick="docTruyen()" class=""ten" id="name${i}">${listTruyen[i].Name}</p>
                    <a href=""><p id="author"><i class="fa-solid fa-pen-nib"></i></i>${listTruyen[i].author}</p></a>
                    <span>${listTruyen[i].intro}</span><br>  
                </div> 
                <div id="body-duoi">
                     <button>${listTruyen[i].type} </button>
                    <p href="">${listTruyen[i].Status}</p>
                </div>
            </div>
        </div> 
    
        `
}
p.innerHTML=result
}
showTruyen ();

function checkUserName(username) {
    // let username = document.getElementById('username').value
    let re = /^[a-zA-Z0-9\-]+$/
    if (re.test(username)) {
        return true
    } else {
        return false
    }
}
/* let username="1234"
let a=checkUserName(username)
console.log(a); */
function checkMail(email) {
    //let mail = document.getElementById('email').value;
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email)) {
        return true
    } else {
        return false;
    }
} 
function checkData(){
    if(Object.getOwnPropertyNames(data[0]).length==0){
        return true
    }else{
        return false
    }
}
let infoUserOld = JSON.parse(window.localStorage.getItem("infoUser"))
let obj={}
let data=[{}]
function handleRegister() { 
 /*    let infoUserOld = JSON.parse(window.localStorage.getItem("infoUser"))
let obj={}
let data=[{}] */
    let username = document.getElementById('username').value;   
    let errorUserName = document.getElementById("errorUserName");
    if (checkUserName(username) == false) {
           document.getElementById("username").value = ""
           errorUserName.setAttribute("style", "display:block; color:blue");
    } else {
        errorUserName.setAttribute("style", "display:none");
         obj.username=username
    }
         let email = document.getElementById("email").value 
        if (checkMail(email) == false) {
            document.getElementById("errorMail").style.display = 'block'
            document.getElementById("errorMail").style.color = 'red'
            document.getElementById("email").value = ""


        } else {
            document.getElementById("errorMail").style.display = 'none'
             obj.email=email
            let pass = document.getElementById("password").value;
            let p = document.getElementById("error")
            // console.log(pass);
            if (pass.trim().length < 6 || pass.indexOf(" ") != -1) {
                p.setAttribute("style", "display:block;color:red")
                document.getElementById("password").value = "";
            } else {
                p.setAttribute("style", "display:none");
                let pConfirm = document.getElementById("confirmError");
                let passConfirm = document.getElementById("confirmPassword").value;
                if (passConfirm !== pass) {
                    pConfirm.setAttribute("style", "display:block;color:blue");
                    document.getElementById("confirmPassword").value = "";
                } else {
                    pConfirm.setAttribute("style", "display:none");
                     obj.password=pass
                   console.log(Object.getOwnPropertyNames(data[0]).length );
                    if((checkData(data))==true){
                        data[0]=obj
                        window.localStorage.setItem("infoUser",JSON.stringify(data))
                        console.log(Object.getOwnPropertyNames(data[0]).length );
                        hidenModal1()
                        toogleModal2()
                        
                        
                        
                 }else{
                      let checkEmailUserNameExist =  infoUserOld?.find((index)=> {
                        return index.email === email || index.username === username
                        
                     })
                     if(infoUserOld ){
                         if(checkEmailUserNameExist){
                            console.log(1111)
                            document.getElementById("thong-bao").style.display="block"
                            document.getElementById("thong-bao").style.color="red"
                            
                 
                            document.getElementById("username").value = ""
                            document.getElementById("email").value = ""
                            document.getElementById("password").value = ""
                            document.getElementById("confirmPassword").value = ""
                 
                            }else{
                                let newData = infoUserOld.concat(data)
                                window.localStorage.setItem("infoUser",JSON.stringify(newData))
                                window.location.href = "/"
                                hidenModal1()
                                toogleModal2()
                       
                            }                  
                        }
                    }
                }     
            }
    }   
}

function showPassword() {
 let password = document.getElementById("password");
    let icon = document.getElementById("icon");
    if (password.type == "password") {    
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function showPassword2() {
    let password = document.getElementById("password2");
    let icon = document.getElementById("icon2");
    console.log(icon);
    // console.log(icon.classList);
    if (password.type == "password") {
        /* console.log("chay vao day"); */
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        /* console.log("chay vao day"); */

        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
function showConfirmPassword() {
    let showConfirmPassword = document.getElementById("confirmPassword");
    let iconClose = document.getElementById("iconClose");
    if (showConfirmPassword.type == "password") {
        showConfirmPassword.type = "text";
        iconClose.classList.remove("fa-eye");
        iconClose.classList.add("fa-eye-slash");
    } else {
        showConfirmPassword.type = "password"
        iconClose.classList.remove("fa-eye-slash");
        iconClose.classList.add("fa-eye");
    }
}
function showPassword() {
    let password = document.getElementById("password");
       let icon = document.getElementById("icon");
       if (password.type == "password") {    
           password.type = "text";
           icon.classList.remove("fa-eye");
           icon.classList.add("fa-eye-slash");
       } else {
           password.type = "password";
           icon.classList.remove("fa-eye-slash");
           icon.classList.add("fa-eye");
       }
   }
   function showOldPassword() {
    let password = document.getElementById("old-password");
       let icon = document.getElementById("icon-old-pass");
       if (password.type == "password") {    
           password.type = "text";
           icon.classList.remove("fa-eye");
           icon.classList.add("fa-eye-slash");
       } else {
           password.type = "password";
           icon.classList.remove("fa-eye-slash");
           icon.classList.add("fa-eye");
       }
   }
   function showNewPassword() {
    let password = document.getElementById("new-password");
       let icon = document.getElementById("iconNewPass");
       if (password.type == "password") {    
           password.type = "text";
           icon.classList.remove("fa-eye");
           icon.classList.add("fa-eye-slash");
       } else {
           password.type = "password";
           icon.classList.remove("fa-eye-slash");
           icon.classList.add("fa-eye");
       }
   }
   function showConfirmNewPassword() {
    let password = document.getElementById("confirm-password");
       let icon = document.getElementById("iconNewConfirm");
       if (password.type == "password") {    
           password.type = "text";
           icon.classList.remove("fa-eye");
           icon.classList.add("fa-eye-slash");
       } else {
           password.type = "password";
           icon.classList.remove("fa-eye-slash");
           icon.classList.add("fa-eye");
       }
   }
function toogleModal1(){ 
    document.getElementsByClassName("modal1")[0].style.display="block"
    document.getElementsByClassName("modal2")[0].style.display="none" 
}
function hidenModal1() {
    document.getElementById("username").value=""
    document.getElementById("email").value=""
    document.getElementById("password").value=""
    document.getElementById("confirmPassword").value=""
    document.getElementsByClassName("modal1")[0].style.display="none"
}
function toogleModal2(){
    document.getElementsByClassName("modal2")[0].style.display="block"
    document.getElementsByClassName("modal1")[0].style.display="none"
}
function hidenModal2() {
    document.getElementsByClassName("modal2")[0].style.display="none"
}
function login(){
    let username2 =document.getElementById("username2").value
    let password2 =document.getElementById("password2").value
    let information=JSON.parse(window.localStorage.getItem("infoUser"))
        let checkUserNameExist =  information.find((index)=> {
            return index.username === username2 &&index.password===password2
         })
         if(information ){
             if(checkUserNameExist){

              let person={
                username: username2,
                password: password2
              }
              alert("Đăng nhập thành công")
              localStorage.setItem("userLogin",JSON.stringify(person))
              window.location.href = "/"
               

             }else{
                document.getElementById("modal3").style.display="block"      
             }      
    }
}
let infoPerson=JSON.parse(localStorage.getItem("userLogin"))
if (infoPerson) {
    document.getElementById("box-phai").style.display="none" 

    document.getElementById("user").innerHTML=`${infoPerson.username}`
} else{
    document.getElementById("box-phai").style.display="block" 
    /* elmentById('username').value; */
}   
    function showUserBox() {

    let userbox= document.getElementById("user-box");
   
    if(userbox.style.display==""||userbox.style.display=="block"){
        userbox.style.display="none";

    }else{
        userbox.style.display="block";
    }
}
    function OpenModal3(){ 
        document.getElementById("modal3").style.display="block"
    }
    function hidenModal3() {
        document.getElementById("modal3").style.display="none"  
    }

    let infoUser=JSON.parse(localStorage.getItem("infoUser"))
    function changePass() {
             let infoUser=JSON.parse(localStorage.getItem("infoUser"))
            console.log(infoUser);
            let oldPassInput=  document.getElementById("old-password").value
            let  newPass= document.getElementById("new-password").value
            let confirmPass= document.getElementById("confirm-password").value
            let userLogin= JSON.parse(localStorage.getItem("userLogin"))
            let oldPass=userLogin.password
        if(oldPassInput!=oldPass){
            document.getElementById("error-old-pass").style.display="block";
            document.getElementById("error-old-pass").style.color="red";
            /* document.getElementById("old-password").value="";  
            document.getElementById("new-password").value=""; 
            document.getElementById("confirm-password").value="";  */    
        }else{
            if(oldPassInput==newPass){
                document.getElementById("trung-mat-khau").style.display="block"
                document.getElementById("trung-mat-khau").style.color="red"
                /* document.getElementById("old-password").value="";  
                document.getElementById("new-password").value=""; 
                document.getElementById("confirm-password").value="";  */
                
            }else{
                if(newPass.trim().length<6||newPass.indexOf(" ")!=-1){
                    document.getElementById("error").style.display="block"
                    document.getElementById("error").style.color="red"
                    /* document.getElementById("old-password").value="";  
                    document.getElementById("new-password").value=""; 
                    document.getElementById("confirm-password").value="";  */
                    
                }else{
                    if(newPass!==confirmPass){
                        document.getElementById("confirmError").style.display="block"
                        document.getElementById("confirmError").style.color="red"
                       /*  document.getElementById("old-password").value="";  
                        document.getElementById("new-password").value=""; 
                        document.getElementById("confirm-password").value="";  */
                    }else{
                        userLogin.password=newPass
                        console.log(userLogin);
                        window.localStorage.setItem("userLogin",JSON.stringify(userLogin))
                        for (let i =0; i < infoUser.length; i++) {
                            if(infoUser[i].username===userLogin.username) {
                                infoUser[i].password=userLogin.password
                              
                            } 
                            window.localStorage.setItem("infoUser",JSON.stringify(infoUser))

                        }
                       
                    }
                    
                }  
            }
        }
    }
function logOut() {
    localStorage.removeItem("userLogin")
    window.location.href = "/"
}
function search(){
        let input=document.getElementById("search").value
        let p=document.getElementById("wrapper");
        let result=""
    for (let i = 0; i < listTruyen.length; i++) {
        if(listTruyen[i].author.includes(input)){
            result +=`
            <div id="item">
                <a href=""><img src="${listTruyen[i].img}" style="height: 120px;" alt="a"></a>
                    <div id="item-body">
                        <div id="body-tren">
                            <a href=""><p id="name${i}">${listTruyen[i].Name}</p></a>
                            <a href=""><p id="author"><i class="fa-solid fa-pen-nib"></i></i>${listTruyen[i].author}</p></a>
                            <span>${listTruyen[i].intro}</span><br>  
                        </div> 
                        <div id="body-duoi">
                             <button>${listTruyen[i].type} </button>
                            <p href="">${listTruyen[i].Status}</p>
                        </div>
                    </div>
                </div> 
            
                `
        }
       
    }
    p.innerHTML=result

} 

/* function docTruyen() {
    for(i=0;i<listTruyen.length;i++){
        if(ele_ten.text()==listTruyen[i].Name){
            if (listTruyen[i].Status=="Free") {
                alert("chờ chuyển trang")
            }
        }else{
            aler("bạn phải đăng nhập")
            toogleModal2()
        }
    
    }
} */
