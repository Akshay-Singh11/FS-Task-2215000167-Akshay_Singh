const items = document.getElementById("list");
const addbtn = document.getElementById("add");
const delbtn = document.getElementById("delete");
const taskAdd = document.getElementById("task");
addbtn.addEventListener('click', function () {
    if (list.value != '') {
        const task = document.createElement("li");
        task.innerText = taskAdd.value;
        // list.classList.add('list')
        items.appendChild(task);
        taskAdd.value = "";
    }
});

document.getElementById('add').onclick = function () {
    var moreOptions = document.getElementById('more-options');

    if (moreOptions.style.display === 'none') {
        moreOptions.style.display = 'block';
    }
    else {
        moreOptions.style.display = 'none';
    }
};