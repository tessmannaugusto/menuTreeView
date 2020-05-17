export default function(data){
  const tree = document.querySelector('nav#tree');
  const menu = document.createElement('ul');

  const firstLevel = data.filter(item=> !item.parent)
  const getFirstLis = firstLevel.map(buildTree); //retorna array com li's

  getFirstLis.forEach(li=> menu.append(li));



function buildTree(item){

  //primeiro elemento
  const li = document.createElement('li');
  li.innerHTML = item.name;



  const children = data.filter(child => child.parent === item.id);

  if(children.length > 0){
    //adiciona click para parents
    li.addEventListener('click', event =>{
      event.stopPropagation();
      event.target.classList.toggle('open');
    })
    //adiciona classe identificadora se possui filhos
    li.classList.add('has-children')


    //constrói filhos
    const subMenu = document.createElement('ul');
    children.map(buildTree).forEach(li => subMenu.append(li));
    li.append(subMenu);
  }
  return li;
}

  tree.append(menu);
}