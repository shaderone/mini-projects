// const homeKeys = 'ASDFGHJKL;'
// const keys = Array.from(homeKeys)

const sounds = ['boom', 'clap', 'hihat', 'kick', 'openhat', 'ride', 'snare', 'tink', 'tom']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.className = `btn`
    btn.innerText = sound

    btn.addEventListener('click', () => {
        const audio = document.querySelector(`[data-sound="${sound}"]`)
        stopOtherSongs()
        audio.play()
    })

    const buttonContainer = document.getElementById('buttons')
    buttonContainer.appendChild(btn)
})

const stopOtherSongs = () => {
    sounds.forEach(sound => {
        const song = document.querySelector(`[data-sound="${sound}"]`)
        song.pause()
        song.currentTime = 0
    })
}