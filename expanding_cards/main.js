const panels = document.querySelectorAll('.panel')

const removeActivePanelState = () => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

function expandPanel() {
    removeActivePanelState()
    this.classList.add('active')
}


panels.forEach(panel => {
    panel.addEventListener('click', expandPanel)
})

const links = `https://images.unsplash.com/photo-1619994948937-ef1e758d46ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80? https://images.unsplash.com/photo-1621335819647-09d00a452430?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80 https://images.unsplash.com/photo-1568056308658-aa380181da25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1037&q=80 https://images.unsplash.com/photo-1615653051647-321e464edc86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 https://images.unsplash.com/photo-1606170034762-cbe66ccabbf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80`

const imgArray = links.split(" ");
panels.forEach((panel, index) => {
    panel.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${imgArray[index]}')`;
})


/*More thing to do */
// make an array of the images links
// and then add background image to the div from that array