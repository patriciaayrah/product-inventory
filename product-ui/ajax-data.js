
$(document).ready(function(){
    $('.alert-danger').hide();
    get_product_list();

    $("#newProduct").click(function(){

        $("#modalTitle").html('Create Product');
        $("#buttonTitle").html('Create');
        
    });

    $("#buttonTitle").click(function(){
        var action = $(this).html();
        if(action == "Create"){
            add_product();
        }else if(action == "Update"){
            update_product($("#productID").val());
        }
    });

    $("#deleteProduct").click(function(){
        delete_product($("deleteProduct").val());
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
            return_success(data);
        }
    });
}

function edit_product(id){

        $("#modalTitle").html('Edit Product');
        $("#buttonTitle").html('Update');
        $("#productID").val(id);
        $("#name").val($("#productName"+id+"").html());
        $("#quantity").val($("#quantity"+id+"").html());
        $("#amount").val($("#amount"+id+"").html());
        
}
function update_product(id){

    // $("#buttonTitle").val($("#productID"+id+"").html());
    var productName = $("#name").val();
    var quantity = $("#quantity").val();
    var amount = $("#amount").val();
    var id = $("#productID").val();

    var dataUpdate = { 
        'id'     : id,
        'productName' : productName,
        'quantity' : quantity,
        'amount' : amount
    }
    jQuery.ajax({
        type: 'PUT',
        url: 'http://127.0.0.1:8000/api/updateProduct',
        data: dataUpdate,
        success:function(data){
            return_success(data);
        }
    });

}

function delete_product(id){

    var dataDelete = { 
        'id'     : id 
    }
    jQuery.ajax({
        type: 'DELETE',
        url: 'http://127.0.0.1:8000/api/deleteProduct',
        data: dataDelete,
        success:function(data){
            get_product_list();
            console.log('successfully Delete!');
        }
    });
}

function renderList(data){
    
    var list = "";
    $.each(data, function (i) {
       list +="<tr>";
       list +="<td id='productID"+data[i].id+"'>"+data[i].id+"</td>";
       list +="<td id='productName"+data[i].id+"'>"+data[i].product_name+"</td>";
       list +="<td id='quantity"+data[i].id+"'>"+data[i].quantity+"</td>";
       list +="<td id='amount"+data[i].id+"'>"+data[i].amount+"</td>";
       list +="<td class='text-right'> ";
       list +="<button type='button' class='btn btn-warning mr-1'  data-toggle='modal'  data-target='#productModal' id='editProduct' onclick='edit_product("+data[i].id+")')'>Edit</button>";
       list +="<button type='button' class='btn btn-danger' id='deleteProduct' onclick='delete_product("+data[i].id+")'>Delete</button>";
       list +="</td>";
       list +="</tr>";
    });

    $("#productList").html(list);
}   


function return_success(data){
    if(data.success == false){
        var errorMsg = "";
        if(data.errors != undefined){
            $.each(data.errors, function (value, key) {
                errorMsg +=  "#"+key+" ";
            });
        }else{
            errorMsg +=  "#"+data.message+" ";
        }
        $('.alert-danger').addClass('d-block');
        $('#errorMsg').html(errorMsg);
    }else{
        get_product_list();
        $('input').val('');
        $('.alert-danger').removeClass('d-block');
    }
}                  
