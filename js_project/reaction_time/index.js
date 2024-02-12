// import colorCode from "randomColor.js";
        
let start = new Date().getTime();
        const shape = document.getElementById("shape");
        // alert(Math.random()*16);
        function randomColorCode() {
            const str = "0123456789ABCDEF";
            const arr = str.split('');
            let colorCode = "#";
            for(let i =0; i<6; i++){
                colorCode += arr[Math.floor(Math.random() * 16)];
            }
            return colorCode;
        }
        // alert(randomColorCode());

        function createShape() {
            const top = Math.random() * 400;
            const left = Math.random() * 800;
            const width = (Math.random() * 100) + 50;
            shape.style.top = top + "px";
            shape.style.left = left + "px";
            shape.style.width = width + "px";
            shape.style.height = width + "px";
            shape.style.backgroundColor = randomColorCode();
            if(Math.random() > 0.5){
                shape.style.borderRadius = "50%";
            }else{
                shape.style.borderRadius = "0px";
            }
            setTimeout(() => {
                start = new Date().getTime();
                
                shape.style.display = "block";
            },
            1000);

        }

        createShape();

        shape.onclick = function shapeHide() {
            shape.style.display = "none";
            let end = new Date().getTime();
            timeTaken = (end - start)/1000;
            document.getElementById("reactionTime").innerHTML = timeTaken + "s";
            // alert(timeTaken);
            createShape();
        }