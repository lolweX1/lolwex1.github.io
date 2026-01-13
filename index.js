const tabs = {};
const navBar = document.getElementById("nav_bar");

for (let child of navBar.children) {
  const key = child.id.replace("_tab", "");
  tabs[key] = document.getElementById(key);
}

function setActiveTab(tabKey) {
  for (let key in tabs) {
    tabs[key].classList.remove("active");
    document.getElementById(key + "_tab").classList.remove("active_nav");
  }
  tabs[tabKey].classList.add("active");
  document.getElementById(tabKey + "_tab").classList.add("active_nav");
}
