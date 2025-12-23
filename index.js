const tabs = {};
const navBar = document.getElementById('nav_bar');

for (let child of navBar.children) {
  const key = child.id.replace('_tab', '');
  tabs[key] = child;
}
