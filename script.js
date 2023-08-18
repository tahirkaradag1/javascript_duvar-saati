const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");

    // check if the mode is already set to "Dark Mode" in "localStorage"
    // modun "localStorage" içinde zaten "Dark Mode" olarak ayarlanıp ayarlanmadığını kontrol edin
    if(localStorage.getItem("mode") === "Dark Mode"){

        // add "dark" class to body and set "modeSwitch" text to "Light Mode"
        // gövdeye "dark" sınıfı ekleyin ve "modeSwitch" metnini "Light Mode" olarak ayarlayın
        body.classList.add("dark");
        modeSwitch.textContent = "Light Mode"
    }


    // add a click event listener to "modeSwitch"
    // "modeSwitch" e bir tıklama olayı dinleyicisi ekleyin
    modeSwitch.addEventListener("click", () => {

        // toggle the "dark" class on the body elemnt
        // gövde öğesindeki "karanlık" sınıfı değiştir
        body.classList.toggle("dark");

        // check if the "dark" class is currently present on the body element
        // body öğesinde şu anda "dark" sınıfının olup olmadığını kontrol edin
        const isDarkMode = body.classList.contains("dark");
        
        // set "ModeSwitch" text based on "dark" class presence
        // karanlık" sınıf varlığına dayalı olarak "ModeSwitch" metnini ayarlayın
        modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

        // set "localStorage" "mode" item based on "dark" class presence
        // "karanlık" sınıf varlığına dayalı olarak "localStorage" "mode" öğesini ayarlayın
        localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode")
    });


const updateTime = () => {

    // Get current time and calculate degrees for clock hands
    // Geçerli saati alın ve saat ibreleri için dereceleri hesaplayın
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
    minToDeg = (date.getMinutes() / 60) * 360;
    hrToDeg = (date.getHours() / 12) * 360;

    // Rotate the clock hands to the appropriate degree based on the current time
    // Saat ibrelerini geçerli zamana göre uygun dereceye döndürün
    secondHand.style.transform = `rotate(${secToDeg}deg)`
    minuteHand.style.transform = `rotate(${minToDeg}deg)`
    hourHand.style.transform = `rotate(${hrToDeg}deg)`

};

    // call "updateTime" to set clock hands every second
    // her saniye saat akreplerini ayarlamak için "updateTime" öğesini çağırın

setInterval(updateTime, 1000);


    // call "updateTime" function on page load
    // sayfa yüklemesinde "updateTime" işlevini çağırın

updateTime();