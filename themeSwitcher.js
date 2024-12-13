let themeButtons = document.getElementsByClassName('switchBtn');
let style = localStorage.getItem('style');

let selector = document.getElementById('switcher-id');

if (style == null) {
    setTheme('blue');
} else{
    setTheme(style);
}

for (let i of themeButtons){
    i.addEventListener('click', function () {
        let theme = this.dataset.theme;
        setTheme(theme);
    })
}

function setTheme(theme){
    if (theme == 'blue'){
        selector.href = './themes/blue.css';
    } else if (theme == 'light'){
        selector.href = './themes/light.css';
    } else if (theme = 'purple'){
        selector.href = './themes/purple.css';
    }

    localStorage.setItem('style', theme);
}
