/*Modal*/

const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(() => {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 10);

    });
});

/*CLOSE MODAL*/

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;

        closeModal(currentModal);
   
    });
});

function closeModal (currentModal) {

    let modalContent = currentModal.querySelectorAll('.modal__content');
        // modalContent.removeAttribute('style');
        
    setTimeout(() => {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');  
    }, 200);
   
};

// burger

const burger = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const page = document.getElementById('page');
// const body = document.body;

burger.addEventListener('click', event => {
    if( body.classList.contains('show-sidebar') ) {
        closeSidebar();
    } else {
        showSidebar();
    }
});

function showSidebar() {
    let mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeSidebar);
    page.appendChild(mask);

    body.classList.add('show-sidebar');
};

function closeSidebar() {
    body.classList.remove('show-sidebar');
    document.querySelector('.page__mask').remove();
};;

/* TEXTAREA */
const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
    item.addEventListener('input', event => {
        let $this = event.target;

        $this.style.height = '30px';
        $this.style.height = $this.scrollHeight + 'px';
    });
});;




