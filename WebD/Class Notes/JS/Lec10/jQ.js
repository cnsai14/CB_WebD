$(document).ready(function(){
    let input = $('#inp');
    /*This wraps the id inp with jQuery*/
    let btn = $('#btn');
    let result = $('#result');

    btn.click(function(){
        let value = `<li>
                            <input type="hidden">
                            <span onclick="changeType(this)">${input.val()}</span>
                            <button onclick="update(this)">UPDATE</button>
                            <button onclick="del(this)">DELETE</button>
                            
                            
                    </li>`;
        result.append(value);
    })
});

function update(el){
    console.log($(el));
    let sibiling = $(el).prev();
    let val = sibiling.prev().val();
    $(el).prev().text(val);
    sibiling.prev().attr('type','hidden');


}

function changeType(element){
    $(element).prev().attr('type','text');
}

function del(ele){
    $(ele).parent().remove();
}