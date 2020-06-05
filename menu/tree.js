export default function(data) {
    const tree = document.querySelector("nav#tree");

    const menu = document.createElement("ul");


    const firstLevel = data.filter(item => !item.parent);

    const getList = firstLevel.map(buildTree);
    console.log(getList);
    getList.forEach(li => menu.append(li));

    function buildTree(item) 
    {
        const li = document.createElement("li");
        li.innerHTML = item.name;

        const children = data.filter(child => child.parent === item.id);
        
        if (children.length > 0) {

            li.addEventListener("click", event => {
                event.stopPropagation();
                event.target.classList.toggle("open");
            });

            li.classList.add("has-children");

            const submenu = document.createElement("ul");

            children.map(buildTree)
            .forEach(child => submenu.append(child));
            li.append(submenu);
        }

        return li;
    }

    
    tree.append(menu);
}