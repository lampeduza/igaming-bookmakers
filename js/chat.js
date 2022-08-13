const supportButton = document.querySelector('.feedback__recieve');
const feedbackArea = document.querySelector('.feedback__area');

const onSupportButtonClick = () => {
	feedbackArea.classList.toggle('feedback__area--closed');
	feedbackArea.classList.toggle('feedback__area--opened');
};

supportButton.addEventListener('click', onSupportButtonClick);

// Изменять иконки по клику
// Удалять обработчик