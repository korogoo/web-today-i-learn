const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const tilDateInput = document.querySelector("#til-date");
    const tilTitleInput = document.querySelector("#til-title");
    const tilContentInput = document.querySelector("#til-content");

    const dateValue = tilDateInput.value.trim();
    const titleValue = tilTitleInput.value.trim();
    const contentValue = tilContentInput.value.trim();

    if (!dateValue || !titleValue || !contentValue) {
        alert("날짜, 학습 주제, 내용을 모두 입력해주세요.");
        return;
    }

    const tilItem = document.createElement("article");
    tilItem.classList.add("til-item");

    const timeElement = document.createElement("time");
    timeElement.setAttribute("datetime", dateValue);
    timeElement.textContent = dateValue;

    const titleElement = document.createElement("h3");
    titleElement.textContent = titleValue;

    const contentElement = document.createElement("p");
    contentElement.textContent = contentValue;

    tilItem.appendChild(timeElement);
    tilItem.appendChild(titleElement);
    tilItem.appendChild(contentElement);

    tilList.prepend(tilItem);

    tilForm.reset();
    tilTitleInput.focus();
});