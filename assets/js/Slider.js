class Slider {
    constructor() {
        this.imagesUrls = [];
        this.showPrevBtn = null;
        this.showNextBtn = null;
        this.slideImage = null;
        this.currentImageIndex = 0;

    }
    onShowNextBtnClick(e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        if (this.currentImageIndex == this.imagesUrls.length - 1) {
            this.showNextBtn.disabled = true;
        }
    }
    onShowPrevBtnClick(e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        if (this.currentImageIndex == 0) {
            this.showPrevBtn.disabled = true;
        }
    }
    start(elId, imagesArr) {
        const that = this;

        //const el = document.getElementById(elId);
        const el = document.querySelector('#' + elId);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-img');
        this.imagesUrls = imagesArr;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];

        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);
        });
        if (this.imagesUrls.length == 1) {
            this.showPrevBtn.disabled = true;
            this.showNextBtn.disabled = true;
        }

        else
            this.showPrevBtn.disabled = true;
        window.addEventListener('keydown', function (e) {
            if ((e.code == 'ArrowLeft' || e.code == 'Numpad4') && !that.showPrevBtn.disabled) {
                that.onShowPrevBtnClick();
            }
            if ((e.code == 'ArrowRight' || e.code == 'Numpad6') && !that.showNextBtn.disabled) {
                that.onShowNextBtnClick();
            }
        });
    }
};