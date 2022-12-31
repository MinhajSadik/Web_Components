
class Button extends WebComponent {
    static observedAttributes = ['type', 'disabled', 'autofocus', 'name']

    get template() {
        return `
        <button
            class="btn"
            type={type || 'button'}
            attr.disabled="disabled"
		    attr.autofocus="autofocus"
		    attr.name="name"
            >
            <slot></slot>
            </button>
        `;
    }

    get stylesheet() {
        return `<style>
         :host {
		      display: inline-block;
		    }

		    :host .btn {
		      appearance: none;
		      -moz-appearance: none;
		      -webkit-appearance: none;
		      background: none;
		      border: none;
		      cursor: pointer;
		      border-radius: 3px;
		      padding: 5px 8px;
		      text-transform: capitalize;
		      letter-spacing: 0.05rem;
		    }
        </style>`
    }
}

Button.register();