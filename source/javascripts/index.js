import WebFont from "webfontloader"

WebFont.load({
  classes: false,
  events: false,
  timeout: 2000,
  custom: {
    families: ["Tofino"],
  },
})

window.addEventListener("DOMContentLoaded", () => {
  let operatingSystemColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  let websiteColorScheme = localStorage.getItem("colorScheme") || operatingSystemColorScheme
  let lightColorSchemeButton = document.querySelector("#color-scheme-light")
  let darkColorSchemeButton = document.querySelector("#color-scheme-dark")
  let body = document.querySelector("body")

  let changeColorScheme = (colorScheme) => {
    if (colorScheme === "dark") {
      body.classList.add("color-scheme-is-dark")
    } else {
      body.classList.remove("color-scheme-is-dark")
    }

    if (operatingSystemColorScheme === colorScheme) {
      localStorage.removeItem("colorScheme")
    } else {
      localStorage.setItem("colorScheme", colorScheme)
    }

    [
      lightColorSchemeButton,
      darkColorSchemeButton,
    ].find((button) => button.value === colorScheme).checked = true
  }

  changeColorScheme(websiteColorScheme)

  lightColorSchemeButton.addEventListener("change", (event) => changeColorScheme(event.target.value))
  darkColorSchemeButton.addEventListener("change", (event) => changeColorScheme(event.target.value))

  let discoBall = document.querySelector("#disco-ball")
  let disco = document.querySelector("#disco")
  let audio = document.querySelector("#audio")
  let video = document.querySelector("#video")

  discoBall.addEventListener("click", () => {
    disco.classList.add("active")
    audio.play()
    video.play()
  })

  disco.addEventListener("click", () => {
    disco.classList.remove("active")
    audio.pause()
    video.pause()
  })
})
