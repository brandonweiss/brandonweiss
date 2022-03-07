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
  let operatingSystemColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
  let body = document.querySelector("body")

  if (operatingSystemColorScheme === "dark") {
    body.classList.add("color-scheme-is-dark")
  } else {
    body.classList.remove("color-scheme-is-dark")
  }

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
