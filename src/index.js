import '@lwc/synthetic-shadow';
import Button from 'lightning/button';
import Input from 'lightning/input';
import Datatable from 'lightning/datatable';

customElements.define('lightning-button', Button.CustomElementConstructor);
customElements.define('lightning-input', Input.CustomElementConstructor);
customElements.define('lightning-datatable', Datatable.CustomElementConstructor);
