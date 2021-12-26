// get bars on click to appear the navigation
const bars = document.querySelector('.fa-bars');
const cross = document.querySelector('.fa-times');
const navigation = document.querySelector('.navigation');
const noNavigation = document.querySelector('.no-navigation');

const displayNavigation = () =>{
  navigation.style.display = "flex";
  noNavigation.style.display = "none";
}

const removeNavigation = () => {
  navigation.style.display = "none";
  noNavigation.style.display ="block";
}

cross.addEventListener('click', removeNavigation);
bars.addEventListener('click',displayNavigation);




