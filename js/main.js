let btnCreditos = document.querySelector(".rodape button")
btnCreditos.onclick = function () {
  alert("Disciplina:\nDESENVOLVIMENTO DE SOFTWARE PARA WEB\n\nDupla:\n1. LUIS FERNANDO LOPES MUNIZ\n2. NÁTALY COSTA SOUSA")
}

let ID = 0

let listMessages = []

let btnSendMessage = document.querySelector(".button button")
btnSendMessage.onclick = function () {

  let inputName = document.querySelector(".name-user")
  let inputMessage = document.querySelector(".message-user")
  let date = formattedDate()

  let divMessageSenser = document.createElement("div")
  divMessageSenser.classList.add("message-sender")
  let spanSender = document.createElement("span")
  spanSender.textContent = inputName.value
  divMessageSenser.appendChild(spanSender)

  let divMessage = document.createElement("div")
  divMessage.classList.add("message")
  let pMessage = document.createElement("p")
  pMessage.textContent = inputMessage.value
  divMessage.appendChild(pMessage)

  let divMessageDate = document.createElement("div")
  divMessageDate.classList.add("message-date")
  let spanMessageDate = document.createElement("span")
  spanMessageDate.textContent = date
  divMessageDate.appendChild(spanMessageDate)

  let divBtnDeleteMessage = document.createElement("div")
  divBtnDeleteMessage.classList.add("button-delete")
  let btnDeleteMessage = document.createElement("button")
  divBtnDeleteMessage.appendChild(btnDeleteMessage)
  btnDeleteMessage.textContent = "Deletar"
  btnDeleteMessage.id = ID
  btnDeleteMessage.onclick = () => removeMessage(btnDeleteMessage.id)

  let divMessageBox = document.createElement("div")
  divMessageBox.classList.add("message-box", "fade-in")
  divMessageBox.append(divMessageSenser, divMessage, divMessageDate, divBtnDeleteMessage)
  let divMessageBoard = document.querySelector("div .message-board")
  divMessageBoard.appendChild(divMessageBox)

  let message = {
    id: ID,
    messageBox: divMessageBox
  }

  listMessages.push(message)
  ID++

  // inputName.value = ""
  inputMessage.value = ""
  scrollAutomatico()
}

function formattedDate() {
  let date = new Date()
  let dia = date.getDate().toString().padStart(2, '0')
  let mes = (date.getMonth() + 1).toString().padStart(2, '0') //+1 pois no getMonth Janeiro começa com zero.
  let ano = date.getFullYear()
  let hours = date.getHours().toString().padStart(2, '0')
  let minutes = date.getMinutes().toString().padStart(2, '0')
  return dia + "/" + mes + "/" + ano + " - " + hours + ":" + minutes
}

function removeMessage(id) {
  let messageBoxIndexOf = listMessages.findIndex(messageBox => {
    return messageBox.id == id
  })
  listMessages[messageBoxIndexOf].messageBox.remove()
  listMessages.splice(messageBoxIndexOf, 1)
}

function scrollAutomatico() {
  var divMessageBoard = document.querySelector("div .message-board");
  divMessageBoard.scrollTop = divMessageBoard.scrollHeight;
}

function changeTheme(id) {
  if (id === "theme-0") {
    let back = document.querySelector(".container-main")
    let divRodape = document.querySelector(".rodape")
    divRodape.style.background = "linear-gradient(rgba(82,94,148,1), rgba(65,73,114,1), rgba(31,38,68,1))";
    document.body.style.background = "linear-gradient(rgba(82,94,148,1), rgba(65,73,114,1), rgba(31,38,68,1))";
    back.style.background = "linear-gradient(rgba(82,94,148,1), rgba(65,73,114,1), rgba(31,38,68,1))";
  } else if (id === "theme-1") {
    let back = document.querySelector(".container-main")
    let divRodape = document.querySelector(".rodape")
    document.body.style.background = "#121214";
    back.style.background = "#202024";
    divRodape.style.background = "#202024";
  } else if (id === "theme-2") {
    let back = document.querySelector(".container-main")
    let divRodape = document.querySelector(".rodape")
    document.body.style.background = "#3E7C70";
    back.style.background = "#262D31";
    divRodape.style.background = "#262D31";
  } else if (id === "theme-3") {
    let back = document.querySelector(".container-main")
    let divRodape = document.querySelector(".rodape")
    document.body.style.background = "#820b8a";
    back.style.background = "#AF9AB2";
    divRodape.style.background = "#AF9AB2";
  }
}