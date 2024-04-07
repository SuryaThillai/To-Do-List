
document.getElementById('btn').addEventListener('click', function(e){
    var inputValue = document.querySelector('.todos').value;
    if (inputValue === ''){
        setError();
    } else
        setSuccess();
        var parent_element = document.querySelector('.container')
        var div = document.createElement('div');
        div.classList.add('list');
        parent_element.appendChild(div);
    
        var unchecked_img = document.createElement('img');
        unchecked_img.classList.add('common');
        unchecked_img.classList.add('unchecked');
        div.appendChild(unchecked_img);
    
        var p = document.createElement('p');
        p.innerHTML = inputValue;
        div.appendChild(p);
    
    
        var cross_img = document.createElement('img');
        cross_img.classList.add('cross');
        div.appendChild(cross_img);

        document.querySelector('.todos').value = '';

                
        document.querySelector('.unchecked').addEventListener('click', () =>{
            checkorUncheck();
        })
});


function checkorUncheck() {
    document.querySelector('.unchecked').classList.add('checked');
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
