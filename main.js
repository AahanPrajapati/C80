var StudentName= [];
function Submit(){
    //code written without any loop//
    //var Name1= document.getElementById("Student1").value;
    //var Name2= document.getElementById("Name2").value;
    //var Name3= document.getElementById("Name3").value;
   // var Name4= document.getElementById("Name4").value;
    //var Name5= document.getElementById("Name5").value;
    //StudentName.push(Name1);
    //StudentName.push(Name2);
    //StudentName.push(Name3);
    //StudentName.push(Name4);
    //StudentName.push(Name5);

    //code written with for loop//
    for(j=1;j<=5;j++){
      Name_input=document.getElementById("Name"+j).value;
      StudentName.push(Name_input);
    }
    for(i=0;i<=4;i++){
      document.getElementById("output").innerHTML+="<h2>Name "+StudentName[i]+"<br></h2>";
    }
    
    
    document.getElementById("SubmitButton").style.display="none";
    document.getElementById("SortButton").style.display="inline-block";
}
function SortData(){
    StudentName.sort();
    document.getElementById("output").innerHTML="";    
    for(k=0;k<=4;k++){
        document.getElementById("output").innerHTML+="<h2> Name "+StudentName[k]+"<br></h2>";
      
    }
}

