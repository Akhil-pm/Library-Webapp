function showFiles()
    {
     let inputFile = document.getElementById('input')
     let file=inputFile.files;
     let fileReader = new FileReader;
     fileReader.onload=function(event){
       let url= fileReader.result
       $("#preview").attr("src",`${url}`)
       $("#preview").css("visibility","visible")
       $("#preview").css("height","200px")
       $("#preview").css("width","125px")
     }
     fileReader.readAsDataURL(file[0])
    }
    
    function validate()
    {
        let title = document.getElementById('Title');
        let author = document.getElementById('Author');
        let genere = document.getElementById('genere');
        let image = document.getElementById('input');
    
        if(title.value==""||author.value==""||genere.value==""||image.value=="")
        {
            alert("All Fields required");
            return false;
        }
        else{
            alert("Book added");
            return true;
            
        }
    }












