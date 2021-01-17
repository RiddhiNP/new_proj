$(document).ready(
    
    ()=>{
       
             $.ajax({
                 url: "http://localhost:3000/ent",
                 method: "GET",
                 dataType: "JSON",
                 success: (x)=>{
                     var student ="";
                 //CONSTRUCTION OF ROWS HAVING 
                 // DATA FROM JSON OBJECT 
                 for(var i=0;i<x.length;i++)
                 {
                     student += '<tr>'; 
                     student += '<td>entertainment</td>'; 
                 student += '<td>' +  
                 x[i].id + '</td>'; 
 
                 student += '<td>' +  
                 x[i].question + '</td>'; 
 
                 student += '<td>' +  
                 x[i].option1 + '</td>'; 
 
                 student += '<td>' +  
                 x[i].option2 + '</td>'; 
 
                 student += '<td>' +  
                 x[i].option3 + '</td>'; 
 
                 student += '<td>' +  
                 x[i].option4 + '</td>'; 

                 $y=x[i].id;
                 $b='ent';

                 student += '<td><button type="button" class="btn btn-primary">Update</button></td>';
               
                 student += "<td><button type='button' class='btn btn-danger' onclick='del($y,$b)'>Delete</button></td>";
 
                 student += '</tr>'; 
                 
                 }
                 $('#table').append(student); 
                
             
                 },
                 error:function(response){
                     console.log(response);
                 }
             });
             $.ajax({
                url: "http://localhost:3000/lit",
                method: "GET",
                dataType: "JSON",
                success: (x)=>{
                    var student ="";
                //CONSTRUCTION OF ROWS HAVING 
                // DATA FROM JSON OBJECT 
                for(var i=0;i<x.length;i++)
                {
                    student += '<tr>'; 
                    student += '<td>literature</td>';
                student += '<td class="edit">' +  
                x[i].id + '</td>'; 

                student += '<td class="edit"><input id="ques" value="'+x[i].question+'" disabled></input>' +   '</td>'; 

                student += '<td class="edit"><input id="option1" value="'+x[i].option1+'" disabled></input>' +   '</td>'; 

                student += '<td class="edit"><input id="option2" value="'+x[i].option2+'" disabled></input>' +   '</td>'; 

                student += '<td class="edit"><input id="option3" value="'+x[i].option3+'" disabled></input>' +   '</td>'; 

                student += '<td class="edit"><input id="option4" value="'+x[i].option4+'" disabled></input>' +   '</td>'; 

                $x=x[i].id;
                 $a='lit';

                student += '<td><button type="button" id="'+$x+'" class="btn btn-primary" onclick="update($x,$a)" >Update</button></td>';
                 
                 student += "<td><button type='button' class='btn btn-danger' onclick='del($x,$a)'>Delete</button></td>";

                student += '</tr>'; 
                
                }
                $('#table').append(student); 
               
            
                },
                error:function(response){
                    console.log(response);
                }
            });
         });


 
 $category=null;
 $id = null;
 $flag=0;
 $(function() {
     $("#category").change(function() {
         $category=$('#category').val();
         console.log($category);
         $.get("http://localhost:3000/"+$category, function(data, status) {
   $x = data.length - 1;
 
   $id = data[$x].id;
  
 });
     });
 });
 
 
 
 function add(){
     console.log('done');
     $category=$('#category').val();
     $question=$('#ques_add').val();
     $option1=$('#option1_add').val();
     $option2=$('#option2_add').val();
     $option3=$('#option3_add').val();
     $option4=$('#option4_add').val();
     ++$id;
    console.log($id);
                 var data1 ={  'id': $id, 'question': $question, 'option1': $option1,'option2': $option2,'option3': $option3,'option4': $option4} ;
                 $.ajax({
                     url: "http://localhost:3000/"+$category,
                     method: "POST",
                     data: data1,
                     success: function(response){
                         console.log(response);
                     },
                     error:function(response){
                         console.log(response);
                     }
                 });
             };
 
  function update(val,a){
      if($flag==0){
        $var='#'+val+'';
        $('input').attr('disabled',false);
     $('input').attr('autofocus');
 $($var).text('save');
 $($var).attr('class','btn btn-success');
 $flag=1;
      }
    else{
        $question=$('#ques').val();
        $option1=$('#option1').val();
        $option2=$('#option2').val();
        $option3=$('#option3').val();
        $option4=$('#option4').val();
        
       
       //  var id=1;
           var data1 ={  'id': $id, 'question': $question, 'option1': $option1,'option2': $option2,'option3': $option3,'option4': $option4} ;
            $.ajax({
               url: "http://localhost:3000/"+a+"/"+val,
                method: "PUT",
                data: data1,
                success: function(response){
                    console.log(response);
                },
                error:function(response){
                    console.log(response);
                }
            });
            $flag=0;
    }
 }
 
 function del(val,a){
     alert(val);
         $.ajax({
             url: "http://localhost:3000/"+a+"/"+val,
             method: "DELETE",
             success: function(response){
                 console.log(response);
             },
             error:function(response){
                 console.log(response);
             }
         });
 }