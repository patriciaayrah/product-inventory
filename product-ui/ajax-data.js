
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

    $("#buttonTitle").click(function(){
        var action = $(this).html();
        if(action == "Create"){
            
            add_product();
        }else if(action == "Update"){
            update_product();
        }
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

function add_product(){

     // setup some local variables
     var $form = $("#productForm");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    jQuery.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/api/createProduct',
        data: serializedData,
        success:function(data){
            get_product_list();
            $('input').val('');
            console.log('successfully added!');
        }
    });
}

function update_product(){

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


                            
                            
