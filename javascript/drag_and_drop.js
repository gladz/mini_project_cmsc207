

function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

function allowDrop(event) {
            event.preventDefault();
            event.target.classList.add('dragover');
        }

function drop(event) {
            event.preventDefault();
            const imageId = event.dataTransfer.getData('text');
            const imageElement = document.getElementById(imageId);
            const boxId = event.target.id;

            if (imageElement.dataset.box === boxId) {
                event.target.appendChild(imageElement); 
                event.target.classList.remove('dragover');
                imageElement.setAttribute('draggable', 'false');
            

                imageElement.style.transform = 'rotate(360deg)';


            } else {
                alert("Oh owww! Wrong guess!");
            }
        }