// enter
const modalEnter = document.querySelector('.modal--enter');
const navigationButton = document.querySelector('.button--enter');
const modalButtonCloseEnter = modalEnter.querySelector('.modal__close');
const enterRegistrationButton = modalEnter.querySelector('.buttons-list__link-registration');
const modalRegistration = document.querySelector('.modal--registration');
const modalRegistrationHasAccountButton = modalRegistration.querySelector('.modal__link');
const modalRegistrationButtonClose = modalRegistration.querySelector('.modal__close');
const modalEnterRestoreLink = modalEnter.querySelector('.modal__link');
const modalRestore = document.querySelector('.modal--restore');
const modalRestoreCloseButton = modalRestore.querySelector('.modal__close');

const modalRestoreSendButton = modalRestore.querySelector('.button-list__link--send');
const modalCode = document.querySelector('.modal--code');
const modalCodeButtonClose = modalCode.querySelector('.modal__close');
const modalCodeChangeButton = modalCode.querySelector('.buttons-list__link');
const modalCodeWrongButton = modalCode.querySelector('.modal__link');

const modalSave = document.querySelector('.modal--save');
const modalSaveCloseButton = modalSave.querySelector('.modal__close');

// Добавить отзыв
const mentionButton = document.querySelector('.mention__button');
const modalReviewContainer = document.querySelector('.modal--review');
const modalCloseReview = document.querySelector('.modal__close');
const modalAddButton = document.querySelector('.buttons-list__link');

// Отзыв пользователя
const replyLinkList = document.querySelectorAll('.bookmaker-review__link');
const modalUserReviewContainer = document.querySelector('.modal--user-review');
const modalUserReviewButton = document.querySelector('.modal__close');
const modalAddCommentButton = document.querySelector('.buttons-list__link');




const onButtonClick = (evt) => {
	evt.preventDefault();

	modalEnter.classList.toggle('modal--enter-closed');
};

const onButtonCloseClick = () => {
	modalEnter.classList.toggle('modal--enter-closed');
};

const onEnterButtonRegistrationClick = (evt) => {
	evt.preventDefault();

	modalEnter.classList.toggle('modal--enter-closed');
	modalRegistration.classList.toggle('modal--registration-closed');
};

const onRegistrationButtonCloseClick = () => {
	modalRegistration.classList.toggle('modal--registration-closed');
};

const onEnterRestoreLinkClick = (evt) => {
	evt.preventDefault();

	modalEnter.classList.toggle('modal--enter-closed');
	modalRestore.classList.toggle('modal--restore-closed');
};

const onRestoreCloseButtonClick = () => {
	modalRestore.classList.toggle('modal--restore-closed');
};

const onModalRestoreSendButtonClick = () => {
	modalRestore.classList.toggle('modal--restore-closed');
	modalCode.classList.toggle('modal--code-closed');
};

const onModalCodeButtonCloseClick = () => {
	modalCode.classList.toggle('modal--code-closed');
};

const onModalSaveCloseButtonClick = () => {
	modalSave.classList.toggle('modal--save-closed');
};

const onModalCodeChangeButtonClick = () => {
	modalCode.classList.toggle('modal--code-closed');
	modalSave.classList.toggle('modal--save-closed');
};

const onModalCodeWrongButtonClick = (evt) => {
	evt.preventDefault();

	modalCode.classList.toggle('modal--code-closed');
	modalRestore.classList.toggle('modal--restore-closed');
};

const onModalRegistrationHasAccountButtonClick = (evt) => {
	evt.preventDefault();

	modalRegistration.classList.toggle('modal--registration-closed');
	modalEnter.classList.toggle('modal--enter-closed');	
};

const onMentionButtonClick = () => {
	modalReviewContainer.classList.remove('modal--review-closed');
}

const onModalCloseReviewClick = () => {
	modalReviewContainer.classList.toggle('modal--review-closed');
};

const onModalAddButtonClick = () => {
	modalReviewContainer.classList.toggle('modal--review-closed');
};

const onModalUserReviewButtonClick = () => {
	modalUserReviewContainer.classList.toggle('modal--user-review-closed');
};

const onModalAddCommentButtonClick = (evt) => {
	evt.preventDefault();

	modalUserReviewContainer.classList.toggle('modal--user-review-closed');
};

replyLinkList.forEach((button) => {
	button.addEventListener('click', (evt) => {
		evt.preventDefault();
		modalUserReviewContainer.classList.toggle('modal--user-review-closed');
	});
});

navigationButton.addEventListener('click', onButtonClick);
modalButtonCloseEnter.addEventListener('click', onButtonCloseClick);
enterRegistrationButton.addEventListener('click', onEnterButtonRegistrationClick);
modalRegistrationButtonClose.addEventListener('click', onRegistrationButtonCloseClick);
modalEnterRestoreLink.addEventListener('click', onEnterRestoreLinkClick);
modalRestoreCloseButton.addEventListener('click', onRestoreCloseButtonClick);
modalRestoreSendButton.addEventListener('click', onModalRestoreSendButtonClick);
modalCodeButtonClose.addEventListener('click', onModalCodeButtonCloseClick);
modalCodeChangeButton.addEventListener('click', onModalCodeChangeButtonClick);
modalSaveCloseButton.addEventListener('click', onModalSaveCloseButtonClick);
modalCodeWrongButton.addEventListener('click', onModalCodeWrongButtonClick);
modalRegistrationHasAccountButton.addEventListener('click', onModalRegistrationHasAccountButtonClick);

modalUserReviewButton.addEventListener('click', onModalUserReviewButtonClick);
modalAddCommentButton.addEventListener('click', onModalAddCommentButtonClick);

mentionButton.addEventListener('click', onMentionButtonClick);
modalCloseReview.addEventListener('click', onModalCloseReviewClick);
modalAddButton.addEventListener('click', onModalAddButtonClick);



/* МОДУЛИ КОНФЛИКТУЮТ, СДЕЛАТЬ КАК - ТО ЭКСПОРТ, ИМПОРТ ДЛЯ ТОГО, ЧТОБЫ ОНИ ПЕРЕСТАЛИ КОНФЛИКТОВАТЬ
// Оставить отзыв на card.html
const leaveReview = document.querySelector('.card__information-feedback-link');

const onLeaveReviewClick = (evt) => {
	evt.preventDefault();

	modalReviewContainer.classList.toggle('modal--review-closed');
};

leaveReview.addEventListener('click', onLeaveReviewClick);

*/