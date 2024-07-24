document.addEventListener("DOMContentLoaded", function () {
    const mainContainer = document.querySelector(".main-container");
    const video = document.querySelector(".video-section video");
    const wrapperLinkImg = document.querySelector(".wrapper-link-img");
    let videoPlayed = false;
  
    mainContainer.addEventListener("click", function () {
      if (!videoPlayed) {
        video.play();
        videoPlayed = true;
  
        wrapperLinkImg.classList.add("no-click");
  
        setTimeout(() => {
          wrapperLinkImg.classList.add("show");
  
          setTimeout(() => {
            wrapperLinkImg.classList.remove("no-click");
          }, 1500);
        }, 1500);
      }
    });
  
    const copyButton = document.querySelector(".ca-copy-main-action");
    const copyText = document.querySelector(".ca-copy-text");
  
    copyButton.addEventListener("click", function () {
      const textToCopy = copyText.textContent;
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        copyButton.textContent = "CA Copied";
        setTimeout(() => {
          copyButton.textContent = "COPY CA";
        }, 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
      document.body.removeChild(textArea);
    });
  
    fetch("env.json")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("telegram-link").href = data.telegram;
        document.getElementById("dexscreener-link").href = data.dexscreener;
        document.getElementById("twitter-link").href = data.twitter;
        document.getElementById("bullx-link").href = data.bullx;
        document.querySelector(".ca-copy-text").textContent = data.ca;
      })
      .catch((error) => console.error("Error loading env.json:", error));
  });
  