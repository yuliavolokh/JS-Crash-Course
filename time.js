function updateTime() {
        const now = new Date(); 
  const timeElement = document.getElementById("time");
  timeElement.innerHTML = now.toLocaleTimeString(); 
}
      
      setInterval(updateTime, 1000);