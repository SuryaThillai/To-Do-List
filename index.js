
debugger
let item_id = 0;


document.getElementById('btn').addEventListener('click', function(e){
    var inputValue = document.querySelector('.todos').value;
    if (inputValue === ''){
        setError();
    } else
        setSuccess();
        // item_id += 1;
        // var str_item_id = item_id.toString();
        // console.log(str_item_id);
        // console.log(typeof(str_item_id));

        var parent_element = document.querySelector('.container')
        var div = document.createElement('div');
        item_id += 1;
        let str_item_id = item_id.toString();
        div.id = 'item';
        div.classList.add('list');
        div.classList.add(str_item_id);
        parent_element.appendChild(div);
        console.log(div.classList)
    
        var unchecked_img = document.createElement('img');
        unchecked_img.id = 'item';
        // unchecked_img.classList.add(str_item_id);
        unchecked_img.classList.add('unchecked');
        div.appendChild(unchecked_img);
    
        var p = document.createElement('p');
        p.innerHTML = inputValue;
        div.appendChild(p);
    
    
        var cross_img = document.createElement('img');
        cross_img.id = 'item';
        // cross_img.classList.add(str_item_id);
        cross_img.classList.add('cross');
        div.appendChild(cross_img);

        document.querySelector('.todos').value = '';

        // for  
        // document.getElementById('item').addEventListener('click', (event) =>{
        //     var id = event.target.classList[0];
        //     document.getElementsByClassName(id)[0].classList.remove('unchecked');
        //     document.getElementsByClassName(id)[0].classList.add('checked');
        // })
        var test = document.getElementById('item')
        console.log(test)

});


function checkorUncheck() {
    document.querySelector('.').classList.add('checked');
    document.querySelector('.unchecked').classList.remove('unchecked');
};

function deleteitems(){
    

}


function setError(){
    var getting_div = document.querySelector('.only');
    getting_div.classList.add('error');
    getting_div.innerHTML = 'Enter a task to add';
}

function setSuccess(){
    var getting_div = document.querySelector('.only');
    getting_div.classList.remove('error');
    getting_div.innerHTML = '';
    
    
}
  



// document.querySelector('button').addEventListener('click', function(){
//     var inputValue = document.querySelector('.todos').value;
    
//     var container = document.querySelector('.container');
//     document.querySelector('.task').innerHTML = inputValue;
//     var duplicate_div = document.querySelector('.list');
//     container.appendChild(duplicate_div.cloneNode(true));
// });
