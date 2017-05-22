export class SilcOffcanvas
{
    protected element: HTMLElement;

    public constructor(element: HTMLElement)
    {
		// Save shortcut to element
        this.element = element;

		this.element.addEventListener('click', (event) => {
			this.toggle(event);
		});
    }

	protected toggle(event) {

		event.preventDefault();

		let target = event.target.getAttribute('href');

		let targetEl = document.querySelector(target);

		targetEl.classList.toggle('silc-offcanvas--visible');
	}
}
