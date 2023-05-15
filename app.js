function red(){
document.getElementById("body").style.background ="red"
}
function green(){
    document.getElementById("body").style.background ="green"
    }
    function white(){
        document.getElementById("body").style.background ="white"
        }
        function getValue(){
            var get_1 = document.getElementById("get").value 
 get_1 = alert(get_1)
        };
function image (){
   var hello = document.getElementById("pic")
    if(hello.src==="https://i.pinimg.com/550x/e6/9b/b7/e69bb7c92e53bae36814a6fd49ba450f.jpg"){
        hello.src="https://i.pinimg.com/originals/07/b5/85/07b58552c4244a58c315c171bc682418.jpg"
    //    hello.style.width= "150px"
    }
    else if(hello.src==="https://i.pinimg.com/originals/07/b5/85/07b58552c4244a58c315c171bc682418.jpg"){
hello.src="https://i.pinimg.com/550x/8f/c1/a4/8fc1a4cb8e63c1a10a348eb716c1c619.jpg"
    }
    else if(hello.src==="https://i.pinimg.com/550x/8f/c1/a4/8fc1a4cb8e63c1a10a348eb716c1c619.jpg"){
        hello.src="https://i.pinimg.com/236x/e4/b3/05/e4b3052999393732b1b0eabb259871f7.jpg"
    }
    else{
        hello.src="https://i.pinimg.com/550x/e6/9b/b7/e69bb7c92e53bae36814a6fd49ba450f.jpg"
    //   document.write(b)
    }
    // pics()
}
        const pot= ()=>{
            var name1 = Math.round(Math.random()*3)
      var arr =["بادشاہوں کو سکھایا ہے قلندر ہونا آپ آسان سمجھتے ہیں منور ہونا","ایک آنسو بھی حکومت کے لیے خطرہ ہے تم نے دیکھا نہیں آنکھوں کا سمندر ہونا","sunā hai log use aañkh bhar ke dekhte haiñ so us ke shahr meñ kuchh din Thahar ke dekhte haiñ","sunā hai raat use chāñd taktā rahtā hai sitāre bām-e-falak se utar ke dekhte haiñ "]
      document.getElementById("get_pot").innerHTML=arr[name1]
        }
        const getLength = () =>{
         var getl = document.getElementById("getL").value;
         alert(getl+" Your length is "+getl.length);
        }
        const get_Date= ()=>{
            var now = new Date();
            var get_date = now.getDate();
            var get_hours = now.getHours();
            var get_minute = now.getMinutes();
            var get_second = now.getSeconds();
            var c= get_hours-12;
            alert("Current time  " + c + " : " + get_minute + " : " + get_second + "\n" + "Current Date  " + get_date)

        }