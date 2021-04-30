
$(document).ready(function(){

    get_product_list();

    $("#newProduct").click(function(){

        $("#modalTitle").html('Create Product');
        $("#buttonTitle").html('Create');

    });

    $("#editProduct").click(function(){

        $("#modalTitle").html('Edit Product');
        $("#buttonTitle").html('Update');

    });

});



function get_product_list(){
    jQuery.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/listProduct',
        success:function(data){
            renderList(data);
        }
    });
}

function renderList(data){
    
    var list = "";
    $.each(data, function (i) {
       list +="<tr>";
       list +="<td>"+data[i].id+"</td>";
       list +="<td>"+data[i].product_name+"</td>";
       list +="<td>"+data[i].quantity+"</td>";
       list +="<td>"+data[i].amount+"</td>";
       list +="<td class='text-right'> ";
       list +="<button type='button' class='btn btn-warning mr-1'  data-toggle='modal' data-target='#productModal' id='editProduct'>Edit</button>";
       list +="<button type='button' class='btn btn-danger' id='deleteProduct'>Delete</button>";
       list +="</td>";
       list +="</tr>";
    });

    $("#productList").html(list);
}   


                            
                            
